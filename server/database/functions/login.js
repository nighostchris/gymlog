const sequelize = require('../models/index');
const bcrypt = require('./bcrypt');
const token = require('./token');

const Tokens = sequelize.import('../models/tokens.js');

const createToken = (data, res) => {
	const payload = {
		iss: 'gymlog-auth',
		sub: data.username,
	};

	const secretKey = token.getSecret();
	const genToken = token.generateToken(payload, secretKey);
	res.json({ token: genToken });
};

exports.login = (req, res) => {
	Tokens.findOne({
		where: {
			username: req.body.username,
		},
	}).then((data) => {
		if (!data) {
			res.status(400);
			res.json({ err: 'Non-existing user' });
		}

		const { password } = req.body;
		const { salt, hash } = data;

		if (!bcrypt.validatePassword(password, salt, hash)) {
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
