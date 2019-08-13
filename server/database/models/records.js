module.exports = (sequelize, DataTypes) => {
	const Records = sequelize.define('records', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING(20),
			references: {
				model: 'users',
				key: 'username'
			},
		},
		date: {
			type: DataTypes.STRING,
		},
		exercise: {
			type: DataTypes.STRING,
		},
		sets: {
			type: DataTypes.STRING,
		},
	});

	return Records;
};
