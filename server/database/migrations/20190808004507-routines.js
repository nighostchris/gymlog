module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('routines', {
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
			name: {
				type: Sequelize.STRING,
			},
			remark: {
				type: Sequelize.STRING(30),
			},
			exercise: {
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
		return queryInterface.dropTable('routines');
	},
};
