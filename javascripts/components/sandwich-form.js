import cart from './cart.js';

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
const pendingSandwich = {
  items: [],
  price: 0
};
let idCounter = 0;

// test function, used only to show that items are building behind the scenes
// const buildSandwich = (array) => {
//   let domString = '';
//   array.forEach(currentItem => {
//     domString += `<h3>${currentItem}</h3>`    
//   });
//   util.printToDom('test-items', domString);
// };

const itemToggle = (e) => {
  const id = e.target;
  const itemName = e.target.nextElementSibling.innerText;
  const itemPrice = e.target.nextElementSibling.nextElementSibling.innerText;
  if (id.checked) {
    pendingSandwich.items.push(itemName);
    pendingSandwich.price += Number(itemPrice);
    // buildSandwich(pendingSandwich.items);
  } else {
    pendingSandwich.items.forEach((ingredient, index) => {
      if (ingredient === itemName) {
        pendingSandwich.items.splice(index, 1);
        pendingSandwich.price -= Number(itemPrice);
        // buildSandwich(pendingSandwich.items);
      };
    });
  };
};

const ingredientBuilder = (printLoc, object) => {
  const objects = Object.entries(object);
  let domString = '';
  for (const [key, property] of objects) {
    domString += `<div class="ingredient-box">`;
    domString += `  <input type="checkbox" aria-checked="false" class="ingredient-selector" id="${key}"></input>`;
    domString += `  <p>${property[0]}</p>`;
    domString += `  <p>${property[1].toFixed(2)}</p>`;
    domString += `</div>`;
    document.getElementById('divProductOptions').addEventListener('change', itemToggle);
  };
  util.printToDom(printLoc, domString);
};

// test function, possibly be moved to cart.js when built
const addToCart = (e) => {
  e.preventDefault();
  cart.setCart(pendingSandwich);
  cart.cartToDom();
  makeSandwichForm();
  pendingSandwich.items = [];
  pendingSandwich.price = 0;
};

const makeSandwichForm = () => {
  ingredientBuilder('breadDiv', breads);
  ingredientBuilder('cheeseDiv', cheeses);
  ingredientBuilder('meatDiv', meats);
  ingredientBuilder('veggieDiv', veggies);
  ingredientBuilder('condimentDiv', condiments);
};

const eventListeners = () => {
  document.getElementById('add-to-cart-button').addEventListener('click', addToCart);
};

export default { makeSandwichForm, eventListeners };