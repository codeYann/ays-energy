"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) =>
		await queryInterface.addConstraint("posts", {
			fields: ["author_id"],
			type: "foreign key",
			name: "author_id_foreign_key",
			references: {
				table: "authors",
				field: "id",
			},
			onDelete: "cascade",
			onUpdate: "cascade",
		}),

	down: async (queryInterface, Sequelize) =>
		queryInterface.removeConstraint("posts", "author_id_foreign_key"),
};
