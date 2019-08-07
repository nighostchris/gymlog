const bcrypt = require('bcrypt');

exports.generateHashedPassword = (password, s) => {
	if (!s) {
		s = bcrypt.genSaltSync(10);
	}

	const hash = bcrypt.hashSync(password, s);

	return {
		salt: s,
		hashedPassword: hash,
	};
};
