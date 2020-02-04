"use script";

let counterValue = 0;
const number = document.querySelector("#value");

function decrement() {
  counterValue--;
  number.textContent = counterValue;
}

function increment() {
  counterValue++;
  number.textContent = counterValue;
}

const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonIncrement = document.querySelector("[data-action='increment']");

buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment);
