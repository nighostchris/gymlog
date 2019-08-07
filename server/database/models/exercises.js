module.exports = (sequelize, DataTypes) => {
	const Exercises = sequelize.define('exercises', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			unique: true,
        },
        part: {
            type: DataTypes.STRING(20),
        },
        tool: {
            type: DataTypes.STRING(20),
        },
        avatar: {
            type: DataTypes.STRING,
        },
	});

	return Exercises;
};
