import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/config";

class AuthorModel extends Model {}

AuthorModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "authors",
		timestamps: false,
		createdAt: true,
		updatedAt: true,
	}
);

export default AuthorModel;
