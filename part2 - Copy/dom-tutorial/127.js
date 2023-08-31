// keypress event
// mouseover event
const body = document.body;

body.addEventListener("keypress", (e) => {
  console.log(e.key);
});
const mainButton = document.querySelector(".ulout");
// console.log(mainButton);
// mainButton.addEventListener("mouseover", () => {
//   console.log("mouseover event ocurred!!!");
// });

mainButton.addEventListener("mouseleave", () => {
  console.log("mouseleave event ocurred!!!");
});
