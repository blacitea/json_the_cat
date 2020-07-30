const request = require("request");
const input = process.argv[2];

const host = "https://api.thecatapi.com/v1/breeds/search";
const noBreedError = "Sorry! We haven't encounter them yet! \nWe will continue our search\nInto the outer space .....🛸🛸🛸🛸";
const invalidURLError = "Oops! The path to the cathouse was interupted by dogs!\n🐕  🐩  🐕  🐩\nFind and use a new path!\n 🐱 🐾 🐱 🐾 ";


const writeDesc = (err, data) => {
  if (err) {
    console.log(invalidURLError);
    process.exit();
  }
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log(noBreedError);
    process.exit();
  }
};


const fetchBreedDescription = function (breedName, callback) {
  const searchURL = host.concat("?q=", breedName);
  request(searchURL, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      callback(null, data);
    }
  });
};

fetchBreedDescription(input, writeDesc);