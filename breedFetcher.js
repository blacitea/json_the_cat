const request = require("request");
const input = process.argv[2];

const host = "https://api.thecatapi.com/v1/breeds/search";
const searchURL = host.concat("?q=", input);
const noBreedError = "Sorry! We haven't encounter them yet! \nWe will continue our search\nInto the outer space .....🛸🛸🛸🛸";
const invalidURLError = "Oops! The path to the cathouse was interupted by dogs!\n🐕  🐩  🐕  🐩\nFind and use a new path!\n 🐱 🐾 🐱 🐾 ";

request(searchURL, (error, response, body) => {
  if (error) {
    console.log(invalidURLError);
  } else {
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log(noBreedError);
    } else {
      write(data);
    }
  }
});

const write = objData => {
  console.log(objData[0].description);
};


//console.log(breedInfo);
