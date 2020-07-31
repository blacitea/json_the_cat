const request = require("request");

const fetchBreedDescription = function (breedName, callback, host = "https://api.thecatapi.com/v1/breeds/search") {
  const noBreedError = "Sorry! We haven't encounter them yet! \nWe will continue our search\nInto the outer space .....🛸🛸🛸🛸";
  const invalidURLError = "Oops! The path to the cathouse was interupted by dogs!\n🐕  🐩  🐕  🐩\nFind and use a new path!\n 🐱 🐾 🐱 🐾 ";
  const searchURL = host.concat("?q=", breedName);
  request(searchURL, (error, response, body) => {
    if (error) {
      callback(invalidURLError, null);
    } else {
      const data = JSON.parse(body);
      if (!data[0]) {
        callback(noBreedError);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

//fetchBreedDescription(input, writeDesc);

module.exports = {
  fetchBreedDescription,
};
