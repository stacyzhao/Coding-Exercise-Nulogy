var app = require('../calculations.js');
var expect = require('chai').expect;

var calculateTotal = app.calculateTotal;

describe('calculateTotal', function() {
  describe('price', function() {
    it('should return error when the price has an invalid input', function() {
      var people = 4,
          material = 'books',
          err = 'Invalid Input';

      expect(function (){calculateTotal('$12456.95', people, material)}).to.throw(err);
      expect(function (){calculateTotal(0, people, material)}).to.throw(err);
      expect(function (){calculateTotal(-40, people, material)}).to.throw(err);
    });
  });
  
  describe('labour/people', function() {
    before(function () {
      this.price = 5432.00;
      this.material = 'drug';
    });

    it('should return total when the number of people is 0', function() {
      var people = 0;

      var test = calculateTotal(this.price, people, this.material);

      expect(test).to.equal(6199.81);
    });

    it('should return total when the labour count has an invalid input', function() {
      var test1 = calculateTotal(this.price, "s", this.material),
          test2 = calculateTotal(this.price, [], this.material),
          test3 = calculateTotal(this.price, -2, this.material);

      expect(test1).to.equal(6199.81);
      expect(test2).to.equal(6199.81);
      expect(test3).to.equal(6199.81);
    });
  });

  describe('material', function() {
    before(function () {
      this.price = 1299.99;
      this.people = 3;
    });

    it('should return total when the value is not in materials', function() {
      var material = 'gears';

      var test = calculateTotal(this.price, this.people, material);

      expect(test).to.equal(1414.13);
    });

    it('should return total when the value is available in materials', function() {
      var material = 'food';

      var test = calculateTotal(this.price, this.people, material);

      expect(test).to.equal(1591.58);
    });

    it('should return total when there are multiple materials (argument)', function() {
      var material1 = 'food',
          material2 = 'paper';

      var test = calculateTotal(this.price, this.people, material1, material2);

      expect(test).to.equal(1591.58);
    });

    it('should return total when there are more than one or more material(s) (array)', function() {
      var test1 = calculateTotal(this.price, this.people, []),
          test2 = calculateTotal(this.price, this.people, ['food']),
          test3 = calculateTotal(this.price, this.people, ['food', 'drug', 'paper']);

      expect(test1).to.equal(1414.13);
      expect(test2).to.equal(1591.58);
      expect(test3).to.equal(1693.95);
    });
  });


});
