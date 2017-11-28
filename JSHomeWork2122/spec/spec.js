var utils = require('../js/pow.js');

describe("object()", function() {

  it("it should show the pow of a and b", function() {
    // prepare
    var result;
    var result2;

    // act
    result = utils.object.pow(2,3);
    result2 = utils.object.pow(-4,2);

    // assert
    expect(result).toBe(8);
    expect(result2).toBe(16);
  });

  it("it should show the sum of a and b", function() {
    // prepare
    var result;

    // act
    result = utils.object.sum(2,3);

    // assert
    expect(result).toBe(5);
  });

  it("it should show the subtraction of a and b", function() {
    // prepare
    var result;

    // act
    result = utils.newFunc(4,1);

    // assert
    expect(result).toBe(3);
  });

});