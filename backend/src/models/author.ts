import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/config/database.config";

class AuthorModel extends Model {}

AuthorModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
		},
	},
	{
		tableName: "authors",
		timestamps: false,
		sequelize,
	}
);
