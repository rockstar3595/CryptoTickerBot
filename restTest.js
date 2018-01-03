const request = require("request");

const url = "https://api.coinmarketcap.com/v1/ticker/bitcoin/";

request.get(url, (error, response, body) => {
  var json = JSON.parse(body);
  console.log(
    `Coin: ${json[0]["id"]} \n`,
	
	`Price: ${json[0]["price_usd"]}`
  );
});