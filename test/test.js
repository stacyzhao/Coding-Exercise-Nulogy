var app = require('../calculations.js');
var expect = require('chai').expect;

var calculateTotal = app.calculateTotal;

describe('calculateTotal', function() {
  it('calculates the total price when all inputs are valid', function() {
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

  it('should return an error when the price is in dollar format', function() {
    var basePrice = '$12456.95',
      people = 4,
      material = 'books';

    var totalPrice = function (){calculateTotal(basePrice, people, material)};

    expect(totalPrice).to.throw('Invalid Input');
  });

  it('should return an error when the price is zero', function() {
    var basePrice = 0,
      people = 4,
      material = 'books';

    var totalPrice = function (){calculateTotal(basePrice, people, material)};

    expect(totalPrice).to.throw('Invalid Input');
  });

  it('should return an error when the price is a negative number', function() {
    var basePrice = -40,
      people = 4,
      material = 'books';

    var totalPrice = function (){calculateTotal(basePrice, people, material)};

    expect(totalPrice).to.throw('Invalid Input');
  });

  it('calculates the total price when the labour count is a string', function() {
    var basePrice = 5432.00,
      people = "s",
      material = 'drug';

    var totalPrice = calculateTotal(basePrice, people, material);

    expect(totalPrice).to.equal(6199.81);
  });

  it('calculates the total price when the labour count is an empty array', function() {
    var basePrice = 5432.00,
      people = [],
      material = 'drug';

    var totalPrice = calculateTotal(basePrice, people, material);

    expect(totalPrice).to.equal(6199.81);
  });

  it('calculates the total price when the labour count is a negative number', function() {
    var basePrice = 5432.00,
      people = -2,
      material = 'drug';

    var totalPrice = calculateTotal(basePrice, people, material);

    expect(totalPrice).to.equal(6199.81);
  });

});
