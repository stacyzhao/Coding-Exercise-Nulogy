var mandatoryMarkup = {
  markup: 5,
  people: 1.2
};

var materials = {
  drug: 7.5,
  food: 13,
  electronic: 2,
};

module.exports = {
  calculateTotal: function (price, people, material) {
    // check if price's first value has $, if so, remove and convert it to float
    if (typeof price != 'number'){
      price = parseFloat(price.slice(1, price.length));
    }

    var markupPrice = price * (mandatoryMarkup.markup/100) + price;

    // check if material is in an array if not make it an array
    if (!Array.isArray(material)){
      var material = [material];
    };

    var materialPrice = 0;

    // check if there are more than 1 material and total accordingly
    if (material.length >= 1) {
      for (var x = 0; x < material.length; x++){
        materialPrice += module.exports.materialPrice(material[x], markupPrice);
      }
    };

    var peoplePrice = module.exports.employeePrice(people, markupPrice);

    return (markupPrice + peoplePrice + materialPrice).toFixed(2);
  },

  // check if material is in the materials object
  materialPrice: function (material, markupPrice){
    if (material in materials) {
      return markupPrice * (materials[material]/100);
    } else {
      return 0;
    };
  },

  // check if the number of people is a number
  employeePrice: function (people, markupPrice){
    if (typeof people === 'number'){
      return markupPrice * ((mandatoryMarkup.people * people) / 100);
    }
  }

};

console.log(module.exports.calculateTotal(1299.99, 3, ['food', 'drug']));
