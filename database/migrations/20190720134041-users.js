module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			username: {
				type: Sequelize.STRING(20),
				unique: true,
			},
			firstname: {
				type: Sequelize.STRING(20),
			},
			surname: {
				type: Sequelize.STRING(20),
			},
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	},
};
