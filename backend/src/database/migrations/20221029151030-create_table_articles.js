"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.createTable("articles", {
			article_id: {
				type: Sequelize.DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			article_title: {
				type: Sequelize.DataTypes.STRING,
				unique: true,
				allowNull: false,
			},
			article_content: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			image_link: {
				type: Sequelize.DataTypes.STRING,
			},
			author_id: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.dropTable("articles");
	},
};
