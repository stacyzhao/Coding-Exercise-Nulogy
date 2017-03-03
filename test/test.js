var app = require('../calculations.js')
var assert = require('assert');
var calculateTotal = app.calculateTotal;

describe('calculateTotal', function() {
  it('should return total when the value is not in materials', function() {
    assert.equal(6451.20, calculateTotal(6000.00, 2, 'gears'));
  });
  it('should return total when the value is available in materials (food)', function() {
    assert.equal(1591.58, calculateTotal(1299.99, 3, 'food'));
  });
  it('should return total when the value is available in materials (drugs)', function() {
    assert.equal(6199.81, calculateTotal(5432.00, 1, 'drug'));
  });
  it('should return total when the value is available in materials (books)', function() {
    assert.equal(13707.63, calculateTotal(12456.95, 4, 'books'));
  });
  it('should return total when the price starts with $', function() {
    assert.equal(13707.63, calculateTotal('$12456.95', 4, 'books'));
  });
  it('should return NaN when the price is not a number', function() {
    assert.equal('NaN', calculateTotal('asdf', 4, 'books'));
  });
  it('should return NaN when the number of people is not a number', function() {
    assert.equal('NaN', calculateTotal(12456.95, 's', 'books'));
  });
  it('should return total when there are more than one type of material', function() {
    assert.equal(1693.95, calculateTotal(1299.99, 3, 'food', 'drug'));
  });
});
