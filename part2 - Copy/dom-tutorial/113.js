// Add new HTML elements to page

// innerHTML to add html element

const todoList = document.querySelector(".second");
console.log(todoList.innerHTML);
todoList.innerHTML = "<li>New Todo 2 </li>";
todoList.innerHTML += "<li>New Todo </li>";
todoList.innerHTML += "<li>teach students </li>";
const h1 = document.querySelector(".last");
// when you should use it , when you should not
todoList.insertAdjacentElement("afterbegin", h1);
