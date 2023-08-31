// innerHtML 
const headline = document.querySelector(".second");
console.log(headline.innerHTML);
headline.innerHTML = "<h1>Inner html changed </h1>";
console.log(headline.innerHTML);
headline.innerHTML += "<button class= \"btn\"> Learn More </button>" 
headline.innerHTML="<a href=\"dasf\">adfasdfas</a>"
console.log(headline.innerHTML);
