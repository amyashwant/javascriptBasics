function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
  firstName: "harshit",
  age: 8,
};
const user2 = {
  firstName: "mohit",
  age: 9,
};

// call: binds the this value, invokes the function, and allows you to pass a list of arguments.
// apply: binds the this value, invokes the function, and allows you to pass arguments as an array.
// bind: binds the this value, returns a new function, and allows you to pass in a list of arguments.
// apply

about.apply(user1, ["guitar", "bach"]);
const func = about.bind(user2, "guitar", "bach");
console.log(func);
func();
about.call(user1,"fsdgv","asef")