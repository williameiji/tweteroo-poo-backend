import { Router } from "express";
import { TweetsController } from "../controller/tweetsContoller.js";

const tweetsRouter = Router();

tweetsRouter
	.post("/tweets", (req, res) => {
		const { tweet, username } = req.body;

		const data = new TweetsController().createTweet(tweet, username);

		res.status(data.status).send(data.message);
	})
	.get("/tweets")
	.get("/tweets/:username");

export { tweetsRouter };
