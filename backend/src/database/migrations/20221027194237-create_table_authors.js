"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.createTable("authors", {
			id: {
				type: Sequelize.DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.DataTypes.STRING(100),
				allowNull: false,
			},
			email: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			created_at: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.dropTable("authors");
	},
};
