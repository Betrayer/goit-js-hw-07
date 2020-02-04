"use strict";

const inputCheck = document.querySelector("#validation-input");

const correctNumber = Number(inputCheck.getAttribute("data-length"));

inputCheck.addEventListener("blur", validation);

function validation() {
  if (inputCheck.value.length === correctNumber) {
    inputCheck.classList.remove("invalid");
    inputCheck.classList.add("valid");
  } else {
    inputCheck.classList.add("invalid");
    inputCheck.classList.remove("valid");
  }
}
