import { Router } from "express";
import AuthorsRouter from "./AuthorsRouter";
import ArticlesRouter from "./ArticlesRouter";

class Routes {
	public readonly router: Router;

	constructor() {
		this.router = Router();
		this.router.use("/authors", AuthorsRouter);
		this.router.use("/articles", ArticlesRouter);
	}
}

export default new Routes().router;
