"use strict";

const inputVal = document.querySelector("#name-input");

const outputVal = document.querySelector("#name-output");

inputVal.addEventListener("input", handler);

function handler() {
  if (!inputVal.value) {
    outputVal.textContent = "незнакомец";
  } else {
    outputVal.textContent = inputVal.value;
  }
}
