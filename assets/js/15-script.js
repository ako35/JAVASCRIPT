// querySelector eslesen ilk elemani secer.
const headElement = document.querySelector("h1");
console.log(headElement);

const aboutUsElement = document.querySelector("#aboutUs");
console.log(aboutUsElement);

const spanElement = document.querySelector("#aboutUs span");
console.log(spanElement);

const menuElement = document.querySelector(".menu");
console.log(menuElement);

const menuItem3Element = document.querySelector(".menu li:nth-child(3)");
console.log(menuItem3Element);

headElement.innerText = "Hello World";

// querySelectorAll eslesen tüm elemanları seçer
const spanElementAll = document.querySelectorAll("span");
console.log(spanElementAll);

spanElementAll[0].innerText = "Hello World";

// listenin ikinci elemanini alip son elemanina ekleyen kod
const listItemText = document.querySelector(".menu li:nth-child(2)").innerText;
console.log(listItemText);

document.querySelector(".menu li:last-child").innerText += " " + listItemText;

const listItem4Element = document.querySelector(".menu li:nth-child(4)");
listItem4Element.innerHTML = "<b>Hello</b>";
// listItem4Element.innerText = "<b>Hello</b>";

