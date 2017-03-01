var app = require('../calculations.js')
var assert = require('assert');
var calculateTotal = app.calculateTotal;

describe('calculateTotal', function() {
  it('should return total when the value is not in materials', function() {
    assert.equal(6451.20, calculateTotal(6000.00, 2, 'gears'));
  });
  it('should return total when the value is available in materials', function() {
    assert.equal(1591.58, calculateTotal(1299.99, 3, 'food'));
  });
});
