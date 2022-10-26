import express from "express";
import cors from "cors";
import Routes from "../routes";

class Server {
	public server: express.Application;

	constructor() {
		this.server = express();
		this.middleware();
	}

	private middleware() {
		this.server.use(express.json());
		this.server.use(Routes);
		this.server.use(cors());
	}

	public Run(port: string | undefined) {
		this.server.listen(port, () => {
			console.log("Server running on localhost: ", port);
		});
	}
}

export default Server;
