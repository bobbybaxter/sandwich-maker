// import cart from './cart.js';

import addBreads from '../helpers/breads.js';
import addCheeses from '../helpers/cheeses.js';
import addCondiments from '../helpers/condiments.js';
import addMeats from '../helpers/meats.js';
import addVeggies from '../helpers/veggies.js';
import util from '../helpers/util.js';

const breads = addBreads.addBread();
const cheeses = addCheeses.addCheese();
const condiments = addCondiments.addCondiment();
const meats = addMeats.addMeat();
const veggies = addVeggies.addVeggie();

// const addToCartEvent = (e) => {
//   e.preventDefault();
// };

const ingredientBuilder = (printLoc, object) => {
  const ingredients = Object.values(object);
  let domString = '';
  for (const ingredient of ingredients) {
    domString += `<div>`;
    domString += `  <p>${ingredient[0]}</p>`;
    domString += `  <p>${ingredient[1]}</p>`;
    domString += `</div>`;
  };
  console.log(object, domString);
  util.printToDom(printLoc, domString);
};

const makeSandwichForm = () => {
  ingredientBuilder('breadDiv', breads);
  ingredientBuilder('cheeseDiv', cheeses);
  ingredientBuilder('meatDiv', meats);
  ingredientBuilder('veggieDiv', veggies);
  ingredientBuilder('condimentDiv', condiments);
};



export default { makeSandwichForm };