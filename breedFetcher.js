const request = require("request");

request("https://api.thecatapi.com/v1/breeds/search?q=Siberian", (error, response, data) => {
  console.log(data);
});
