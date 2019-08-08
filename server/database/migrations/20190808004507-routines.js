module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('routines', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id'
				},
			},
			name: {
				type: Sequelize.STRING,
			},
			remark: {
				type: Sequelize.STRING(30),
			},
			exercise: {
				type: Sequelize.ARRAY(Sequelize.STRING),
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
