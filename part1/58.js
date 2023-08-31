// filter method

const numbers = [1, 3, 2, 6, 4, 8];

const evenNumbers = numbers.filter((number, i) => {
//   console.log(i);
  return number % 2;
});
console.log(evenNumbers);
