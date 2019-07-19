module.exports = (sequelize, DataTypes) => {
	const Tokens = sequelize.define('tokens', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING(20),
			unique: true,
		},
		salt: {
			type: DataTypes.STRING,
		},
		hash: {
			type: DataTypes.STRING,
		},
	});

	Tokens.associate = (models) => {
		models.Tokens.hasOne(models.Users);
	};

	return Tokens;
};
