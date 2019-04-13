const printToDom = (divId, textToPrint) => {
  let selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

export default { printToDom };