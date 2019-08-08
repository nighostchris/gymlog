module.exports = (sequelize, DataTypes) => {
	const Routines = sequelize.define('routines', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'users',
				key: 'id'
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
