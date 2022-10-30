import dotenv from "dotenv";
import Server from "./server";

dotenv.config();
const app = new Server();

app.Run(6666);
