const ul = document.querySelector(".ulout");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);
