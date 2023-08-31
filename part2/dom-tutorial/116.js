// clone nodes
const ul = document.querySelector(".container");
const li = document.createElement("li");
li.textContent = "new todo";
// ul.append(li)
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);
