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

const ingredientBuilder = (object) => {
  // console.log(breads);
  const ingredients = Object.values(object);
  // console.log(values);
  let domString = '';
  for (const ingredient of ingredients) {
    domString += `<h3>${ingredient[0]}</h3>`;
    domString += `<h4>${ingredient[1]}</h4>`;
    // console.log(`The price of ${ingredient[0]} is ${ingredient[1]}`);
  };
  console.log(domString);
  util.printToDom('sandwich-form', domString);
};

  // let domString = '';
  // for (let i = 0; i < array.length; i++) {
  //   const displayName = Object.values(array)[i][0];
  //   const displayPrice = Object.values(array)[i][1];
  //   domString += `<h3>${displayName}</h3>`;
  //   domString += `<h4>${displayPrice}</h4>`;
    // console.log("domString", domString);
  // };
  // console.log("domString2", domString);
// };

// console.log(Object.values(breads)[0][0])

const makeSandwichForm = () => {
  ingredientBuilder(breads);
};



export default { makeSandwichForm };