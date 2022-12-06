import { Request, Response } from "express";
import ArticlesModel from "../models/articles";
import { ServerResponseError } from "../utils/internal-error";
import { sequelize } from "../database/config";

type ArticleDecoderType = {
	article_id?: number;
	article_title: string;
	article_content: string;
	image_link?: string;
	author_id: number;
};

export class ArticlesController {
	public async index(_: Request, response: Response) {
		try {
			const articlesList = await ArticlesModel.findAll();
			response.status(200).send(articlesList);
		} catch (error) {
			throw new ServerResponseError(`Unable to get all articles. ${error}`);
		}
	}

	public async store(request: Request, response: Response) {
		try {
			const {
				article_title,
				article_content,
				author_id,
				image_link,
			}: ArticleDecoderType = request.body;

			const newArticle = await ArticlesModel.create({
				article_title,
				article_content,
				image_link: image_link ? image_link : "http://source.unsplash.com/random",
				author_id,
			});

			response.status(200).send(newArticle);
		} catch (error) {
			throw new ServerResponseError(`Unable to create an article. ${error}`);
		}
	}

	public async contentByAuthorID(request: Request, response: Response) {
		try {
			const { id: authorID } = request.params;

			const allArticles = await sequelize.query(
				`SELECT * FROM articles 
         INNER JOIN authors a 
         ON articles.author_id = a.id
         AND a.id = ${authorID}`,
				{
					model: ArticlesModel,
				},
			);

			response.status(200).send(allArticles);
		} catch (error) {
			throw new ServerResponseError(
				`Unable to get all articles of this author. ${error}`,
			);
		}
	}
	public async remove(request: Request, response: Response) {
		try {
			const { article_id }: { article_id: number } = request.body;
      console.log(article_id);
			const removeArticle = await ArticlesModel.destroy({
				where: {
					article_id,
				},
			});
			response.status(200).send(removeArticle);
		} catch (error) {
			throw new ServerResponseError(`Unalbe to remove this article. ${error}`);
		}
	}
}
