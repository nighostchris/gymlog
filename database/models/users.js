module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING(20),
			unique: true,
		},
		firstname: {
			type: DataTypes.STRING(20),
		},
		surname: {
			type: DataTypes.STRING(20),
		},
	});

	return Users;
};
