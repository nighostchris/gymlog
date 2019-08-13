module.exports = (sequelize, DataTypes) => {
	const Routines = sequelize.define('routines', {
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
		name: {
			type: DataTypes.STRING,
		},
		remark: {
			type: DataTypes.STRING(30),
		},
		exercise: {
			type: DataTypes.STRING,
		},
	});

	return Routines;
};
