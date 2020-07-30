const request = require("request");

request("https://api.thecatapi.com/v1/breeds/search", (error, response, data) => {
  console.log(data);
});
