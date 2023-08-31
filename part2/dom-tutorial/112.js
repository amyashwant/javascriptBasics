const sectionTodo = document.querySelector(".outermost");
console.log(sectionTodo.classList);
sectionTodo.classList.add('bg-dark');
sectionTodo.classList.toggle("bg-dark");//removes if exists , add if does not exists
sectionTodo.classList.add('light');
sectionTodo.classList.remove("light");
console.log(sectionTodo.classList);
const ans = sectionTodo.classList.contains("light");
console.log(ans);

// sectionTodo.classList.toggle("bg-dark");

// const header = document.querySelector(".second");

// header.classList.add("bg-dark");
// console.log(header.classList);
