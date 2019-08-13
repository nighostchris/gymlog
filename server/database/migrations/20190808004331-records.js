module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('records', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			username: {
				type: Sequelize.STRING(20),
				references: {
					model: 'users',
					key: 'username'
				},
			},
			date: {
				type: Sequelize.STRING,
			},
			exercise: {
				type: Sequelize.STRING,
			},
			sets: {
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
		return queryInterface.dropTable('records');
	},
};
