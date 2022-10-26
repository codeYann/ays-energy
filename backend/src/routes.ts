import { Router } from "express";

class Routes {
	public router: Router;

	constructor() {
		this.router = Router();
	}
}

export default new Routes().router;
