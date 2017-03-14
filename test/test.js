var app = require('../calculations.js');
var expect = require('chai').expect;

var calculateTotal = app.calculateTotal;

describe('calculateTotal', function() {

  it('should return total when the value is not in materials', function() {
    var price = 1299.99,
        people = 3,
        material = 'gears',
        test = calculateTotal(price, people, material);

    expect(test).to.equal(1414.13);
  });

  it('should return total when the value is available in materials', function() {
    var price = 1299.99,
        people = 3,
        material = 'food',
        test = calculateTotal(price, people, material);

    expect(test).to.equal(1591.58);
  });

  it('should return total when the number of people is 0', function() {
    var price = 5432.00,
        people = 0,
        material = 'drug',
        test = calculateTotal(price, people, material);

    expect(test).to.equal(6199.81);
  });

  it('should return total when there are more than one or more type of material (array)', function() {
    var price = 1299.99,
        people = 3,
        test1 = calculateTotal(price, people, []),
        test2 = calculateTotal(price, people, ['food']),
        test3 = calculateTotal(price, people, ['food', 'drug', 'service']);

    expect(test1).to.equal(1414.13);
    expect(test2).to.equal(1591.58);
    expect(test3).to.equal(1693.95);
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
    var price = 5432.00,
        material = 'drug',
        test1 = calculateTotal(price, "s", material),
        test2 = calculateTotal(price, [], material),
        test3 = calculateTotal(price, -2, material);

    expect(test1).to.equal(6199.81);
    expect(test2).to.equal(6199.81);
    expect(test3).to.equal(6199.81);
  });

});
