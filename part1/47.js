// hoisting

// hello();

function hello() {
  console.log("hello world");
//   return undefined;
}
let lolo = hello;
console.log(lolo());
// const hello = "hello world";
// console.log(hello);
