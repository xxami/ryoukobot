
const dotenv = require('dotenv');
const twitchbot = require('node-twitchbot');

dotenv.config({path: 'ryouko.env'});

const bot = new twitchbot({
	username: process.env.TWITCH_USERNAME,
	oauth: process.env.TWITCH_OAUTH,
	channel: process.env.TWITCH_CHANNEL
});

