"use strict";

const itemsAmount = categories.querySelectorAll(".item");

console.log(`В списке ${itemsAmount.length} категории`);

const transform = Array.from(itemsAmount);

transform.forEach(header => {
  console.log(`Категория: ${header.querySelector("h2").textContent}`);
  console.log(
    `Количество элементов: ${header.querySelector("ul").children.length}`
  );
});
