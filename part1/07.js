// trim()
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "harshit   rana  ";

console.log(firstName.length);
// firstName = firstName.trim(); // "harshit"
// console.log(firstName)
// console.log(firstName.length);
// firstName.toUpperCase();
// console.log(firstName);
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index
// end index
let newString = firstName.slice(1); // hars
console.log(newString);

const arr1 = ["hello", "ji", "kaise", "ho"];
newarr = arr1.splice(1, 2, "efrrase", "sf");
console.log(arr1);
console.log(newarr);
