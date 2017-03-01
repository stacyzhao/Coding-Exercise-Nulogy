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
    var markupPrice = price * (mandatoryMarkup.markup/100) + price;
    var peoplePrice = markupPrice * ((mandatoryMarkup.people * people) / 100);
    if (material in materials) {
      materialPrice = markupPrice * (materials.food/100);
    } else {
      materialPrice = 0;
    };
    return (markupPrice + peoplePrice + materialPrice).toFixed(2);
  },
};
