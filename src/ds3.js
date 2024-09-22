const increment = document.querySelector("#idIncrement");
const incrementValue = document.querySelector("#idIncValue");

const descrement = document.querySelector("#idDecrement");
const descrementValue = document.querySelector("#idDecValue");

let counter = 0;

increment.onclick = () => {
  increment.textContent = "try again";
  incrementValue.textContent = `${counter} times`;
  counter++;
  console.log("clicked");
};

descrement.onclick = () => {
  descrement.textContent = "try again ";
  descrementValue.textContent = `${counter} times`;
  counter--;
};
