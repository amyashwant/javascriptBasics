function hello(){
    console.log("hello world");
}

// // javascript function ===> function  + object

// // console.log(hello.name);

// // you can add your own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// // name property ---> tells function name;

// // function provides more usefull properties.

// // console.log(hello.prototype); // {}

// only functions provide prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype.sing());

// console.log(hello.prototype)









// function Human(firstName, lastName) {
//   (this.firstName = firstName),
//     (this.lastName = lastName),
//     (this.fullName = function () {
//       return this.firstName + " " + this.lastName;
//     });
// }

// var person1 = new Human("Virat", "Kohli");
// // console.log(person1)
// const person2 = Object.create(person1);
// console.log(person2.firstName);
// console.log(person1);
