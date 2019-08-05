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

exports.validateToken = (req, res) => {
	try {
		const result = jwt.verify(req.body.token, secretJson.secret);
		res.json({ verify: result });
	} catch (e) {
		res.status(400);
		res.json({ err: e.message });
	}
};
