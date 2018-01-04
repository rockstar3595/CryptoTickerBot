const Discord = require('discord.js');
const client = new Discord.Client();

const url = "https://api.coinmarketcap.com/v1/ticker/bitcoin/";

const request = require("request");

client.on('ready', () => {
      console.log('I am ready!');
      });
      
      client.on('message', message => {
      if (message.content === 'bitcoin'){
            
            request.get(url, (error, response, body) => {
			var json = JSON.parse(body);
            
      message.reply('Coin: ${json[0]["id"]} \n Price: ${json[0]["price_usd"]}');
			});
      }
      });
      
      client.login(process.env.BOT_TOKEN);
