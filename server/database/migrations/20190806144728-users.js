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
      salt: {
        type: Sequelize.STRING,
      },
      hash: {
        type: Sequelize.STRING,
      },
      permission: {
        type: Sequelize.INTEGER,
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
		return queryInterface.dropTable('users');
	},
};
