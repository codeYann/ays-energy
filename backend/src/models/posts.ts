import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/config";
import AuthorsModels from "./authors";

class PostsModel extends Model {}

PostsModel.init(
	{
		post_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		post_title: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		post_content: {
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
		tableName: "posts",
		timestamps: true,
	}
);

PostsModel.hasMany(AuthorsModels, {
	foreignKey: "id",
});

export default PostsModel;
