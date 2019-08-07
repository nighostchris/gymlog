module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('exercises', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id'
				},
			},
			name: {
				type: Sequelize.STRING,
				unique: true,
			},
			part: {
				type: Sequelize.STRING(20),
			},
			tool: {
				type: Sequelize.STRING(20),
      },
      avatar: {
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
		return queryInterface.dropTable('exercises');
	},
};
