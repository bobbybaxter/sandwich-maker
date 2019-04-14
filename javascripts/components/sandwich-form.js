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
const pendingSandwich = {
  items: [],
  price: 0
};

// test shopping cart, will be moved to cart.js when built
const addToCart = (array) => {
  let domString = '';
  array.forEach(currentItem => {
    domString += `<h3>${array}</h3>`    
  });
  util.printToDom('shopping-cart', domString);
}

const itemToggle = (e) => {
  const id = e.target;
  const itemName = e.target.nextElementSibling.innerText;
  const itemPrice = e.target.nextElementSibling.nextElementSibling.innerText;
  if (id.checked) {
    pendingSandwich.items.push(e.target.nextElementSibling.innerText);
    buildCart(pendingSandwich.items);
  } else {
    pendingSandwich.items.forEach((ingredient, index) => {
      if (ingredient === itemName) {
        pendingSandwich.items.splice(index, 1);
        addToCart(pendingSandwich.items);
      };
    });
  };
};

const ingredientBuilder = (printLoc, object) => {
  const objects = Object.entries(object);
  let domString = '';
  for (const [key, property] of objects) {
    // console.log(key, property[0], property[1]);
    domString += `<div class="ingredient-box">`;
    domString += `  <input type="checkbox" aria-checked="false" class="ingredient-selector" id="${key}"></input>`;
    domString += `  <p>${property[0]}</p>`;
    domString += `  <p>${property[1]}</p>`;
    domString += `</div>`;
    document.getElementById('divProductOptions').addEventListener('change', itemToggle);
  };
  util.printToDom(printLoc, domString);
  // for (const key of objects) {
  //   console.log('key', key);
  // };
};

const makeSandwichForm = () => {
  ingredientBuilder('breadDiv', breads);
  ingredientBuilder('cheeseDiv', cheeses);
  ingredientBuilder('meatDiv', meats);
  ingredientBuilder('veggieDiv', veggies);
  ingredientBuilder('condimentDiv', condiments);
};

// const eventListeners = () => {
//   // document.getElementsByClassName('ingredient-selector').addEventListener('change', itemToggle);
// }


export default { makeSandwichForm };