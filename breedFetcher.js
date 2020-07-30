const request = require("request");

let breedInfo;

request("https://api.thecatapi.com/v1/breeds/search?q=Siberian", (error, response, body) => {
  const data = JSON.parse(body);
  write(data);
});

const write = objData => {
  console.log(objData[0]);
};


//console.log(breedInfo);
