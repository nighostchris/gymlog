const jwt = require('jsonwebtoken');
const secretJson = require('../secret.json');

exports.getSecret = () => {
	return secretJson.secret;
};

exports.generateToken = (payload, key, options) => {
	if (!options) {
		options = { expiresIn: '24h' };
	}

	return jwt.sign(payload, key, options);
};

exports.validateToken = (token, key) => {
	try {
		return jwt.verify(token, key);
	} catch (err) {
		return err;
	}
};
