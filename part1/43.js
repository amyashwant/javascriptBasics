// nested destructuring
const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "males" },
];

const [
  { firstName, userId },
  { userId: Id, ...rest2 },
  { gender: user3gender },
] = users;
console.log(firstName);
console.log(userId);
console.log(user3gender);
console.log(Id)
console.log(rest2)