const request = require("request");
const input = process.argv[2];

const host = "https://api.thecatapi.com/v1/breeds/search";
const searchURL = host.concat("?q=", input);
console.log(searchURL);

request(searchURL, (error, response, body) => {
  const data = JSON.parse(body);
  write(data);
});

const write = objData => {
  console.log(objData[0]);
};


//console.log(breedInfo);
