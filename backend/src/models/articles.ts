import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/config";
import AuthorsModels from "./authors";

class ArticlesModel extends Model {}

ArticlesModel.init(
	{
		article_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		article_title: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		article_content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image_link: DataTypes.STRING,
		author_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "articles",
		timestamps: true,
	}
);

ArticlesModel.hasMany(AuthorsModels, {
	foreignKey: "id",
});

export default ArticlesModel;
