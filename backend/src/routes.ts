import { Router, Request, Response } from "express";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
	response.status(200).send({
		message: "hello, world!",
	});
});

export default routes;
