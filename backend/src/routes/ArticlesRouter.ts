import { Router } from "express";
import { ArticlesController } from "../controllers/ArticlesController";

const articlesController = new ArticlesController();

class ArticlesRouter {
	public readonly router: Router;

	constructor() {
		this.router = Router();
		this.router.get("/", articlesController.index);
		this.router.post("/", articlesController.store);
		this.router.get("/author/:id", articlesController.contentByAuthorID);
		this.router.delete("/", articlesController.remove);
	}
}

export default new ArticlesRouter().router;
