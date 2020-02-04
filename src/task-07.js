"use srtict";

const fontSize = document.querySelector("#font-size-control");
const textItem = document.querySelector("#text");

fontSize.addEventListener("input", handler);

function handler(event) {
  textItem.style.fontSize = event.currentTarget.value + "px";
}
