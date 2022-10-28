import { Request, Response } from "express";
import AuthorModel from "../models/author";

export default class AuthorsController {
	public async index(_: Request, response: Response): Promise<void> {
		try {
			const authorsList = await AuthorModel.findAll();
			response.status(200).send(authorsList);
		} catch (error) {
			response
				.status(204)
				.send({ message: "There are no authors available yet" });
		}
	}

	public async store(request: Request, response: Response): Promise<void> {
		try {
			const { name, email }: { name: string; email: string } = request.body

			const newAuthor = await AuthorModel.create({
				name,
				email,
			});

			response.status(200).send(newAuthor);
		} catch (error) {
			response
				.status(404)
				.send({ message: "It was not possible to create a new author" });
		}
	}
}
