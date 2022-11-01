import { Router } from "express";
import { AuthorsController } from "./controllers/AuthorsController";
import { ArticlesController } from "./controllers/ArticlesController";

const authorsController = new AuthorsController();
const articlesController = new ArticlesController();

class Routes {
	public router: Router;

	constructor() {
		this.router = Router();
		this.authorsEndPoints();
		this.ArticlesEndPoints();
	}

	public authorsEndPoints(): void {
		this.router.get("/authors", authorsController.index);
		this.router.patch("/authors/:id", authorsController.update);
		this.router.post("/authors/post", authorsController.store);
		this.router.delete("/authors/delete", authorsController.delete);
	}

	public ArticlesEndPoints() {
		this.router.get("/articles", articlesController.index);
		this.router.post("/articles/post", articlesController.store);
		this.router.get(
			"/articles/author/:id",
			articlesController.contentByAuthorID
		);
	}
}

export default new Routes().router;
