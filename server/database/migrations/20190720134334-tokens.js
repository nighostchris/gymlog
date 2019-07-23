module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('tokens', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			username: {
				type: Sequelize.STRING(20),
				unique: true,
			},
			salt: {
				type: Sequelize.STRING,
			},
			hash: {
				type: Sequelize.STRING,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('tokens');
	},
};
