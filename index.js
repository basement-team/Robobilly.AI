const Discord = require('discord.js');
const client = new Discord.Client();
const alexa = require('alexa-bot-api')
const ai = new alexa();
const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (message.channel.name == 'bot-test' && !message.author.bot){
		const reply = await ai.getReply(message.content);
		await message.channel.send(reply)
	}
});

client.login(config.token);