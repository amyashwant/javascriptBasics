// callback functions

// function myFunc2(name){
//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can..")
//     callback("harshit");
// }

// myFunc(myFunc2);

// for (var i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(`interval ${i}`);
//   }, i * 1000);
// }




// for (var i = 0; i < 3; i++) {
//     if (true) {
//       let nestedBlockVar = `Nested block variable ${i}`;
//       console.log(nestedBlockVar); // Accessible within the nested block
//     }
//   }
  
//   console.log(nestedBlockVar); // Error: nestedBlockVar is not defined
  





//explanation:
// the for loop will complete all iterations before any of the setTimeout functions are executed because setTimeout is an asynchronous function . As a result, the value logged for i in all three iterations will be 3.

// if we change var to let, output will be 0,1,2 

// because  in case of let a new block scope is created for each iteration of the loop. This means that each iteration of the loop will have its own separate lexical environment and its own distinct value whereas in case of  var, it does not create a new block scope, there is only one i variable shared across all iterations of the loop as var is function scoped.