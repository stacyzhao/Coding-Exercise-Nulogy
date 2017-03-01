var price = 1299.99;
var people = 3;
var material = 'food';


var mandatoryMarkup = {
  markup: 5,
  people: 1.2
}

var materials = {
  drugs: 7.5,
  food: 13,
  electronics: 2,
  people: 1.2,
}

function calculateTotal(price, people, material){
  var markupPrice = price * (mandatoryMarkup.markup/100) + price;
  var materialPrice = markupPrice * (materials.food/100);
  var peoplePrice = markupPrice * ((mandatoryMarkup.people * people) / 100);

  return (markupPrice + peoplePrice + materialPrice).toFixed(2);
}


console.log(calculateTotal(price, people, material));
