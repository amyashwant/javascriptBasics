const mainButton = document.querySelector("ul");
const body = document.body;
const currentColor = document.querySelectorAll("ul li");
function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
}

mainButton.addEventListener("click", () => {
  var randomColor = randomColorGenerator();
  body.style.backgroundColor = randomColor;
//   console.log(currentColor);
  currentColor.forEach((element) => {
    element.textContent = randomColor;
  });
});
