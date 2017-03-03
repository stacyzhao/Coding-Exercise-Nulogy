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
  });

  it('should return total when there are more than one or more type of material (array)', function() {
    expect(calculateTotal(1299.99, 3, ['food'])).to.equal(1591.58);
    expect(calculateTotal(1299.99, 3, ['food', 'drug'])).to.equal(1693.95);
    expect(calculateTotal(1299.99, 3, ['food', 'drug', 'service'])).to.equal(1693.95);
  });

  it('should return total when the price is a string', function() {
    expect(function (){calculateTotal('$12456.95', 4, 'books')}).to.throw('not a number');
  });
});
