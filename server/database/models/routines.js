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
				model: 'Users',
				key: 'id'
			},
		},
		name: {
			type: DataTypes.STRING,
        },
        remark: {
			type: DataTypes.STRING(30),
        },
        date: {
            type: DataTypes.STRING,
        },
        exercise: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        sets: {
            type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.JSON)),
        },
	});

	return Routines;
};
