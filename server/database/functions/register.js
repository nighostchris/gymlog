const { check, matchedData, validationResult } = require('express-validator');
const bcrypt = require('./bcrypt');
const models = require('../models');

const Users = models.users;

const createUser = (input, res) => {
	const hashedPassword = bcrypt.generateHashedPassword(input.password);

	const user = {
		username: input.username,
		firstname: input.firstname,
		surname: input.surname,
		salt: hashedPassword.salt,
		hash: hashedPassword.hashedPassword,
		permission: 1,
	};

	Users.create(user).then((success) => {
		res.status(200);
		res.json({ "success": "User registered" });
	}).catch((e) => {
		res.status(500);
		res.send(e);
	});
};

exports.validate = [
	check('username')
		.custom((value) => {
			return Users.findOne({ where: { username: value } }).then((result) => {
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
	check('firstname')
		.isLength({ min: 1 }).withMessage('First Name cannot be empty'),
	check('surname')
		.isLength({ min: 1 }).withMessage('Surname cannot be empty'),
];

exports.register = (req, res) => {
	const error = validationResult(req);
	if (!error.isEmpty()) {
		res.status(400);
		res.json({ "err": error.array()[0].msg });
	} else {
		const input = matchedData(req);
		createUser(input, res);
	}
};
