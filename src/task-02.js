"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const element = document.querySelector("#ingredients");

const fragment = document.createDocumentFragment();

ingredients.forEach(element => {
  const addItem = document.createElement("li");
  addItem.textContent = element;
  fragment.appendChild(addItem);
});

element.appendChild(fragment);
