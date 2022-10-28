import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
	dialect: "postgres",
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	port: 5432,
});
