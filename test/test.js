var app = require('../calculations.js');
var expect = require('chai').expect;

var calculateTotal = app.calculateTotal;

describe('calculateTotal', function() {
  it('calculates the total prices when all inputs are valid', function() {
    var basePrice = 1299.99,
      people = 3,
      material = 'food';

    var totalPrice = calculateTotal(basePrice, people, material);

    expect(totalPrice).to.equal(1591.58);
  });

  it('calculates the total price when material input has no associated markup', function() {
    var basePrice = 1299.99,
        people = 3,
        material = 'gears';

    var totalPrice = calculateTotal(basePrice, people, material);

    expect(totalPrice).to.equal(1414.13);
  });

  it('calculates the total price when no people are assigned to the project', function() {
    var basePrice = 5432.00,
        people = 0,
        material = 'drug';

    var totalPrice = calculateTotal(basePrice, people, material);

    expect(totalPrice).to.equal(6199.81);
  });

  it('calculates the total price when no materials are specified', function() {
    var basePrice = 1299.99,
        people = 3,
        material = [];

    var totalPrice = calculateTotal(basePrice, people, material);

    expect(totalPrice).to.equal(1414.13);
  });

  it('calculates the total price when multiple materials are specified', function() {
    var basePrice = 1299.99,
      people = 3,
      material = ['food', 'drug', 'service'];

    var totalPrice = calculateTotal(basePrice, people, material);

    expect(totalPrice).to.equal(1693.95);
  });

  /////////
  // You can do something similar for the tests below, that is, ensure that there
  // is only a single assertion per test case.
  //
  // This may seem like the code is worse, given so much duplication, but that's okay.
  // A clean test is one where all the necessary information to understand the test case
  // is included within the example. So in the setup (i.e. the "arrange" part of the test),
  // you should specify everything you need to establish the state of the test case. Then,
  // there should be one "act", following which, a single "assert".
  //
  // (There are exceptions to the 3A rule, but it's a powerful guide when you're learning TDD.
  ///

  it('should return total when the price has an invalid input', function() {
    var people = 4,
        material = 'books',
        err = 'Invalid Input';

    expect(function (){calculateTotal('$12456.95', people, material)}).to.throw(err);
    expect(function (){calculateTotal(0, people, material)}).to.throw(err);
    expect(function (){calculateTotal(-40, people, material)}).to.throw(err);
  });

  it('should return total when the labour count has an invalid input', function() {
    var basePrice = 5432.00,
        material = 'drug';

    var totalPrice1 = calculateTotal(basePrice, "s", material),
        totalPrice2 = calculateTotal(basePrice, [], material),
        totalPrice3 = calculateTotal(basePrice, -2, material);

    expect(totalPrice1).to.equal(6199.81);
    expect(totalPrice2).to.equal(6199.81);
    expect(totalPrice3).to.equal(6199.81);
  });

});
