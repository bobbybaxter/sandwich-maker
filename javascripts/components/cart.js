import sandwichForm from '../components/sandwich-form.js';

import util from '../helpers/util.js';

const cart = [];

const getCart = () => {
  return cart;
};

const setCart = (arr) => {
  const obj = {};
  obj["items"] = arr.items;
  obj["price"] = arr.price;
  cart.push(obj);
};

const checkout = (e) => {
  e.preventDefault();
  //make a checkout modal
};

const cartToDom = (e) => {
  const myCart = getCart();
  let domString = '<div>';
  domString = `<h2>Cart:</h2>`;
  for (let i = 0; i < myCart.length; i++) {
    domString += `<table class="table">`;
    domString += `  <tbody>`;
    domString += `    <tr>`;
    domString += `      <td>${myCart[i].items.join(', ')}</td>`;
    domString += `      <td>$${myCart[i].price.toFixed(2)}</td>`;
    domString += `    </tr>`;
    domString += `  </tbody>`;
    domString += `</table>`;
  }
  domString += `</div>`;
  util.printToDom('shopping-cart', domString);
  let allCheckboxes = document.querySelectorAll("input.ingredient-selector");
  allCheckboxes.checked = false;
  sandwichForm.makeSandwichForm();
};

export default { setCart, cartToDom };