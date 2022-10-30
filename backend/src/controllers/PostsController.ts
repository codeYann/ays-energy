import { Request, Response } from "express";
import PostsModel from "../models/posts";
import { ServerResponseError } from "../utils/internal-error";

type PostDecoderType = {
	post_id?: number;
	post_title: string;
	post_content: string;
	image_link?: string;
	author_id: number;
};

export class PostsController {
	public async index(
		request: Request,
		response: Response
	): Promise<PostsModel[]> {
		try {
			const postsList = await PostsModel.findAll();
			response.status(200).send(postsList);
			return postsList;
		} catch (error) {
			throw new ServerResponseError(`Unable to get all posts. ${error}`);
		}
	}
	public async store(
		request: Request,
		response: Response
	): Promise<PostsModel> {
		try {
			const {
				post_title,
				post_content,
				author_id,
				image_link,
			}: PostDecoderType = request.body;

			const newPost = await PostsModel.create({
				post_title,
				post_content,
				image_link: image_link ? image_link : "",
				author_id,
			});

			response.status(200).send(newPost);
			return newPost;
		} catch (error) {
			throw new ServerResponseError(`Unable to create a post. ${error}`);
		}
	}
}