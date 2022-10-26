import express from "express";
import dotenv from "dotenv";
import Routes from "./routes";

const server = express();
dotenv.config();

server.use(express.json());
server.use(Routes);
server.listen(process.env.PORT, () => {
	console.log(`Server running on localhost:${process.env.PORT || "3506"}`);
});
