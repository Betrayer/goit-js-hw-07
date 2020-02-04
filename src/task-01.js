"use strict";

const itemsAmount = categories.querySelectorAll(".item");

console.log(`В списке ${itemsAmount.length} категории`);

itemsAmount.forEach(header => {
  console.log(`Категория: ${header.querySelector("h2").textContent}`);
  console.log(
    `Количество элементов: ${header.querySelector("ul").children.length}`
  );
});
