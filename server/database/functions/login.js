const bcrypt = require('./bcrypt');
const token = require('./token');
const models = require('../models');

const Users = models.users;

const createToken = (data, res) => {
	const payload = {
		iss: 'gymlog-auth',
		sub: data.username,
		firstname: data.firstname,
	};

	const secretKey = token.getSecret();
	const genToken = token.generateToken(payload, secretKey);
	res.json({ token: genToken });
};

exports.login = (req, res) => {
	Users.findOne({
		where: {
			username: req.query.username,
		},
	}).then((data) => {
		if (!data) {
			res.status(400);
			res.json({ err: 'Non-existing user' });
		}

		const { password } = req.query;
		const { salt, hash } = data;
		const newHashed = bcrypt.generateHashedPassword(password, salt).hashedPassword;
		const compareResult = (newHashed === hash);
		
		if (!compareResult) {
			res.status(400);
			res.json({ err: 'Invalid password' });
		} else {
			createToken(data, res);
		}
	}).catch((e) => {
		res.status(500);
		res.json({ err: e });
	});
};
