const { check, validationResult } = require('express-validator');
const { matchedData } = require('express-validator/filter');
const sequelize = require('../models/index');
const bcrypt = require('./bcrypt');

const Tokens = sequelize.import('../models/tokens.js');
const Users = sequelize.import('../models/users.js');

const createUser = (input, res) => {
	const user = {
		username: input.username,
		firstname: input.firstname,
		surname: input.surname,
	};
	const hashedPassword = bcrypt.generateHashedPassword(input.password);

	Users.create(user).then((result) => {
		return Tokens.create({
			username: result.username,
			salt: hashedPassword.salt,
			hash: hashedPassword.hash,
		});
	}).then((success) => {
		res.status(200);
		res.json({ success });
	}).catch((e) => {
		res.status(500);
		res.send(e);
	});
};

exports.validate = [
	check('username')
		.custom((value) => {
			return Tokens.findOne({ where: { username: value } }).then((result) => {
				if (result) {
					throw new Error('Username not available');
				}
				return true;
			});
		}),
	check('password')
		.isLength({ min: 8 }).withMessage('Minimum 8 characters')
		.matches(/\d/)
		.withMessage('Must contain at least 1 number'),
];

exports.register = (req, res) => {
	const error = validationResult(req);
	if (!error.isEmpty()) {
		res.status(400);
		res.json(error.array());
	} else {
		const input = matchedData(req);
		createUser(input, res);
	}
};
