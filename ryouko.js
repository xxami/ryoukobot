
const dotenv = require('dotenv');
const TwitchBot = require('node-twitchbot');

dotenv.config({path: 'ryouko.env'});

const bot = new TwitchBot({
	username: process.env.TWITCH_USERNAME,
	oauth: process.env.TWITCH_OAUTH,
	channel: process.env.TWITCH_CHANNEL
});

bot.connect().then(() => {

	bot.listenFor('#help', (err, chatter) => {
		bot.msg('this is the help message');
	});

	bot.listenFor('#hugme', (err, chatter) => {
		bot.msg('/me hugs ' + chatter.user);
	});

});
