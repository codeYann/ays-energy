import { Router } from "express";
import { AuthorsController } from "../controllers/AuthorsController";

const authorsController = new AuthorsController();

class AuthorsRouter {
	public readonly router: Router = Router();

	constructor() {
		this.router.get("/", authorsController.index);
		this.router.patch("/:id", authorsController.update);
		this.router.post("/post", authorsController.store);
		this.router.delete("/delete", authorsController.delete);
	}
}

export default new AuthorsRouter().router;
