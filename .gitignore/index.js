const Discord = require("discord.js");

var bot = new Discord.Client();

const config = require("./config.json");

bot.on("ready", function() {
	bot.user.setActivity("TutoBot, !help");
	console.log("Le bot a bien été connecté");
})

bot.login("NDA3Njg5ODQ1MTE3NTUwNTky.DVFNsw.v1a4ej6CrRvyQeAx7WXYlPwbKcw");
