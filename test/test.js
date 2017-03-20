var app = require('../calculations.js');
var expect = require('chai').expect;

var calculateTotal = app.calculateTotal;

describe('calculateTotal', function() {

  it('should return total when the value is not in materials', function() {
    var basePrice = 1299.99,
        people = 3,
        material = 'gears';

    var totalPrice = calculateTotal(basePrice, people, material);

    expect(totalPrice).to.equal(1414.13);
  });

  it('should return total when the value is available in materials', function() {
    var basePrice = 1299.99,
        people = 3,
        material = 'food';

    var totalPrice = calculateTotal(basePrice, people, material);

    expect(totalPrice).to.equal(1591.58);
  });

  it('should return total when the number of people is 0', function() {
    var basePrice = 5432.00,
        people = 0,
        material = 'drug';

    var totalPrice = calculateTotal(basePrice, people, material);

    expect(totalPrice).to.equal(6199.81);
  });

  it('should return total when there are more than one or more type of material (array)', function() {
    var basePrice = 1299.99,
        people = 3;

    var totalPrice1 = calculateTotal(basePrice, people, []),
        totalPrice2 = calculateTotal(basePrice, people, ['food']),
        totalPrice3 = calculateTotal(basePrice, people, ['food', 'drug', 'service']);

    expect(totalPrice1).to.equal(1414.13);
    expect(totalPrice2).to.equal(1591.58);
    expect(totalPrice3).to.equal(1693.95);
  });

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
