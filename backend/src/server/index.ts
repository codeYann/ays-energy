import express, { urlencoded } from "express";
import cors from "cors";
import Routes from "../routes";

class Server {
	public server: express.Application;

	constructor() {
		this.server = express();
		this.middlewares();
	}

	private middlewares() {
    this.server.use(cors({origin: '*'}));
		this.server.use(express.json());
		this.server.use(urlencoded({ extended: true }));
		this.server.use(Routes);
	}

	public Run(port: number) {
		this.server.listen(port, () => {
			console.log(`Server running on localhost:${port}`);
		});
	}
}

export default Server;
