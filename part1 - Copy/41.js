// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};
band.color = "red";
console.log(band);
let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);
