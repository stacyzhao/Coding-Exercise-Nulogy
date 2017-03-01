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
  
  // check if price's first value has $, if so, remove and convert it to float
  calculateTotal: function (price, people, material) {
    if (typeof price != 'number'){
      price = parseFloat(price.slice(1, price.length));
    }
    var markupPrice = price * (mandatoryMarkup.markup/100) + price;
    var materialPrice = module.exports.employeePrice(people, markupPrice);
    var peoplePrice = module.exports.materialPrice(material, markupPrice);
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

console.log(module.exports.calculateTotal(5432.00, 1, 'drug'));
