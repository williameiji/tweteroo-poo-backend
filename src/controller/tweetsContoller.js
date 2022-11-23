import { TweetsServices } from "../services/tweetsServices.js";

export class TweetsController {
	createTweet(tweet, username) {
		return new TweetsServices().createTweet(tweet, username);
	}
}
