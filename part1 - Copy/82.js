// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la ';
//     }
// }
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);// {}
    // console.log("14>>",createUser.prototype.about)
    // const user={}
    // this.firstName="bubu"
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser.prototype.sing = function (){
    return "la la la la ";
}
createUser.prototype.second="bibib"

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1.__proto__);
// console.log(user1.about())
// console.log(user1.is18());
console.log("14>>",createUser.prototype.about())