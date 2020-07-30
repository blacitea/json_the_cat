const request = require("request");

let breedInfo;

request("https://api.thecatapi.com/v1/breeds/search?q=Siberian", (error, response, data) => {
  console.log(typeof (data));
});

//console.log(breedInfo);
