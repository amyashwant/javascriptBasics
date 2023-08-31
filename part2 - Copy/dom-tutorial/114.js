// document.createElement()
// append
// prepend
// remove
const newTodoItem = document.createElement("h3");
// // const newTodoItemText = document.createTextNode("Teach students");
newTodoItem.textContent = "Teach students /h3/";

const todoList = document.querySelector(".container");
todoList.after(newTodoItem);
console.log(newTodoItem);
// const todo1 = document.querySelector('.todo-list li');
// todoList.remove();  
console.log(todoList);

// before
// after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);
