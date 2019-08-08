module.exports = (sequelize, DataTypes) => {
	const Records = sequelize.define('records', {
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
