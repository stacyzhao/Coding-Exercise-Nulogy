var mandatoryMarkup = {
  markup: 5,
  people: 1.2
};

var materials = {
  drug: 7.5,
  food: 13,
  electronic: 2,
};

var checkMaterial = function (material, markupPrice){
  // check if material exists
  if (material in materials) {
    return markupPrice * (materials[material]/100);
  };
  return 0;
};

var employeePrice = function (people, markupPrice){
  // check if the number of people is a number. default is 1.
  if (typeof people !== 'number' || people <= 0){
    people = 1;
  };
  return markupPrice * ((mandatoryMarkup.people * people) / 100);
};

module.exports = {
  calculateTotal: function (price, people, material) {
    if (typeof price !== 'number' || price <= 0 || price === undefined){
      throw new Error('Invalid Input');
    };

    var markupPrice = price * (mandatoryMarkup.markup/100) + price;

    // check if material(s) is in an array if not make it an array
    if (!Array.isArray(material)){
      var material = [material];
    };

    var materialPrice = 0;

    // check if there are more than 1 material and total accordingly
    for (var x = 0; x < material.length; x++){
      materialPrice += checkMaterial(material[x], markupPrice);
    };

    var peoplePrice = employeePrice(people, markupPrice);

    return Math.round((markupPrice + peoplePrice + materialPrice) * 100) / 100.0;
  }

};
