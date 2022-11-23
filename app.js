import cors from "cors";
import express, { json } from "express";
import router from "./src/router/index.js";

class App {
	constructor(port) {
		const app = (this.expressApp = express());

		app.disable("x-powered-by");

		app.use(cors());
		app.use(json());

		this.setRoutes();

		app.listen(port, () => console.log(`Listening on port ${port}`));
	}

	setRoutes() {
		this.expressApp.use("/", router);
	}
}

export default App;
