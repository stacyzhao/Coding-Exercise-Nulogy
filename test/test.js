var app = require('../calculations.js');
var expect = require('chai').expect;

var calculateTotal = app.calculateTotal;

describe('calculateTotal', function() {
  it('should return total when the value is not in materials', function() {
    expect(calculateTotal(6000.00, 2, 'gears')).to.equal(6451.20);
    expect(calculateTotal(12456.95, 4, 'books')).to.equal(13707.63);
  });

  it('should return total when the value is available in materials', function() {
    expect(calculateTotal(1299.99, 3, 'food')).to.equal(1591.58);
    expect(calculateTotal(5432.00, 1, 'drug')).to.equal(6199.81);
    expect(calculateTotal(99.50, 1, 'electronic')).to.equal(107.82);
  });

  it('should return total when the number of people is 0', function() {
    expect(calculateTotal(5432.00, 0, 'drug')).to.equal(6199.81);
  });

  it('should return total when there are more than one or more type of material (array)', function() {
    expect(calculateTotal(1299.99, 3, [])).to.equal(1414.13);
    expect(calculateTotal(1299.99, 3, ['food'])).to.equal(1591.58);
    expect(calculateTotal(1299.99, 3, ['food', 'drug'])).to.equal(1693.95);
    expect(calculateTotal(1299.99, 3, ['food', 'drug', 'service'])).to.equal(1693.95);
  });

  it('should return total when the price has an invalid input', function() {
    expect(function (){calculateTotal('$12456.95', 4, 'books')}).to.throw('Invalid Input');
    expect(function (){calculateTotal(0, 4, 'books')}).to.throw('Invalid Input');
    expect(function (){calculateTotal(-40, 4, 'books')}).to.throw('Invalid Input');
  });

  it('should return total when the labour count has an invalid input', function() {
    expect(calculateTotal(4, 'books')).to.equal(4.25);
    expect(calculateTotal(5432.00, "s", 'drug')).to.equal(6199.81);
    expect(calculateTotal(5432.00, [], 'drug')).to.equal(6199.81);
    expect(calculateTotal(5432.00, -2, 'drug')).to.equal(6199.81);
  });
});
