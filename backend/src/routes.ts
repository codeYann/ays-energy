import { Router } from "express";
import { AuthorsController } from "./controllers/AuthorsController";
import { PostsController } from "./controllers/PostsController";

const authorsController = new AuthorsController();
const postsController = new PostsController();

class Routes {
	public router: Router;

	constructor() {
		this.router = Router();
		this.authorsEndPoints();
		this.postsEndPoints();
	}

	public authorsEndPoints(): void {
		this.router.get("/authors", authorsController.index);
		this.router.post("/authors", authorsController.store);
		this.router.delete("/authors", authorsController.delete);
		this.router.patch("/authors/:id", authorsController.update);
	}

	public postsEndPoints() {
		this.router.get("/post", postsController.index);
		this.router.post("/post", postsController.store);
		this.router.get("/post/author/:id", postsController.contentByAuthorID);
	}
}

export default new Routes().router;
