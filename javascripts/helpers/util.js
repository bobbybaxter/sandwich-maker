const printToDom = (divId, textToPrint) => {
  let selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const printToDomAdd = (divId, textToPrint) => {
  let selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += textToPrint;
};

const varToString = varObj => Object.keys(varObj)[0];

export default { printToDom, printToDomAdd, varToString };