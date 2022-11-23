import { users } from "./usersServices.js";

class Tweet {
	username;
	tweet;
	avatar;

	constructor(username, tweet, avatar) {
		this.username = username;
		this.tweet = tweet;
		this.avatar = avatar;
	}
}

export class TweetsServices {
	createTweet(tweet, username) {
		if (!username || !tweet) {
			return { status: 400, message: "Todos os campos são obrigatórios!" };
		}

		const { avatar } = users.find((user) => user.username === username);

		const newTweet = new Tweet(username, tweet, avatar);

		tweets.push(newTweet);

		return { status: 200, message: "OK, seu tweet foi criado" };
	}
}

export const tweets = [];
