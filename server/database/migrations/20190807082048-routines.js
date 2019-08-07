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
					model: 'Users',
					key: 'id'
				},
			},
			name: {
				type: Sequelize.STRING,
			},
			remark: {
				type: Sequelize.STRING(30),
			},
			date: {
				type: Sequelize.STRING,
			},
			exercise: {
				type: Sequelize.ARRAY(Sequelize.STRING),
			},
			sets: {
				type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.JSON)),
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
