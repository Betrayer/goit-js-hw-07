"use strict";

const itemsAmount = categories.querySelectorAll(".item");

console.log(`В списке ${itemsAmount.length} категории`);

const transform = Array.from(itemsAmount);

transform.forEach(header => {
  console.log(header.querySelector("h2").textContent);
});

const smth = transform.map()