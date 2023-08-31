// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop 
// Object.keys 

// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
//     // console.log(key," : " ,person[key]);
// }

// console.log(typeof (Object.keys(person)));
// console.log(Object.keys(person)) //give us arrray of keys
// const val = Array.isArray((Object.keys(person)));
// console.log(val);
// console.log(Object.keys(person))
// const aa=Object.keys(person)
// console.log(aa)
// for(let key of Object.keys(person)){
//     console.log(key);
// }