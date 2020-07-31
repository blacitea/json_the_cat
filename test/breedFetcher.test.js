const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("#FetchBreedDesc", () => {
  it("should return desc if happy case", (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // happy case, shouldn't have error
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      console.log(typeof (desc));
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
});