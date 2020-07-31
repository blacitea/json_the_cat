const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("#FetchBreedDesc", () => {
  it("should return desc if happy case - Siberian", (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // happy case, shouldn't have error
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(desc, expectedDesc);
      done();
    });
  });
  
  it("should return desc if happy case - York Chocolate", (done) => {
    fetchBreedDescription('York Chocolate', (err, desc) => {
      // happy case, shouldn't have error
      assert.equal(err, null);
      const expectedDesc = "York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it's related to water: unlike many other cats, York Chocolates love it.";
      assert.equal(expectedDesc, desc);
      done();
    });
  });
  it("should return error if given an invalid breed", (done) => {
    fetchBreedDescription('NoSuchCat', (err, desc) => {
      const expectedError = "Sorry! We haven't encounter them yet! \nWe will continue our search\nInto the outer space .....🛸🛸🛸🛸";
      assert.equal(err, expectedError);
      assert.equal(desc, null);
      done();
    });
  });
  it("should return error if given an invalid url", (done) => {
    fetchBreedDescription('.', (err, desc) => {
      const expectedError = "Oops! The path to the cathouse was interupted by dogs!\n🐕  🐩  🐕  🐩\nFind and use a new path!\n 🐱 🐾 🐱 🐾 ";
      assert.equal(err, expectedError);
      assert.equal(desc, null);
      done();
    }, "www.gogo.hk");
  });
});

