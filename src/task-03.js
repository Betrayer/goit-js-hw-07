"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

// const fragment = document.createDocumentFragment();
// const element = document.querySelector("#gallery");

// images.forEach(imgArr => {
//   element.insertAdjacentHTML(
//     "afterbegin",
//     `<li><img src=${imgArr.url} alt=${imgArr.alt}></img></li>`
//   );
// });
// element.appendChild(fragment);

const element = document.querySelector("#gallery");
const fragment = document.createDocumentFragment();

const imgList = images.reduce(
  (acc, imgArr) => acc + `<li><img src =${imgArr.url} alt=${imgArr.alt}</li>`,
  ""
);

element.insertAdjacentHTML("afterbegin", imgList);
