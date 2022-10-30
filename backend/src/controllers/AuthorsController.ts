import { Request, Response } from "express";
import AuthorsModel from "../models/authors";
import { ServerResponseError } from "../utils/internal-error";

type AuthorsDecoderType = {
	id?: number;
	name: string;
	email: string;
};

export class AuthorsController {
	public async index(request: Request, response: Response): Promise<void> {
		try {
			const authorsList = await AuthorsModel.findAll();
			response.status(200).send(authorsList);
		} catch (error) {
			throw new ServerResponseError(
				`Unable to export a list of authors. ${error}`
			);
		}
	}

	public async store(
		request: Request,
		response: Response
	): Promise<AuthorsModel> {
		try {
			const { name, email }: AuthorsDecoderType = request.body;

			const newAuthor = await AuthorsModel.create({
				name,
				email,
			});

			response.status(201).send(newAuthor);
			return newAuthor;
		} catch (error) {
			throw new ServerResponseError(`Unable to create an author. ${error}`);
		}
	}

	public async update(
		request: Request,
		response: Response
	): Promise<[affectedCount: number]> {
		try {
			const id = request.params["id"];

			const { email: newEmail }: { email: string } = request.body;

			const updatedAuthor = await AuthorsModel.update(
				{ email: newEmail },
				{
					where: {
						id: parseInt(id),
					},
				}
			);

			response.status(200).send(updatedAuthor);
			return updatedAuthor;
		} catch (error) {
			throw new ServerResponseError(`Unable to update an author. ${error}`);
		}
	}

	public async delete(request: Request, response: Response): Promise<number> {
		try {
			const { id }: { id: string } = request.body;

			const removedAuthor = await AuthorsModel.destroy({
				where: {
					id: parseInt(id),
				},
			});

			console.log(request.body);

			response.status(200).send({ id });
			return removedAuthor;
		} catch (error) {
			throw new ServerResponseError(`Unable to delete an author. ${error}`);
		}
	}
}
