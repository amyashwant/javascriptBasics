let numbers = [1, 2, 3];
let obj = {
  one: "asd",
  two: "fasdf",
};
let obj2 = Object.create(obj);
obj2.three = "sdfs";
console.log(Object.getPrototypeOf(obj2));
console.log(Array.prototype);
// Array.prototype.about = "jadsijfasi";

console.log(numbers.about);
// console.log(numbers);

// function hello(){
//     console.log("hello");
// }
