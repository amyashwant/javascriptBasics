// select element using get element by id

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1 id="main-heading">i am here as dom</h1>
//     <script src="103.js"></script>
//   </body>
// </html>
// `);

// const mainHeading = dom.window.document.getElementById("main-heading");
const mainHeading=document.getElementById("main-heading")
console.log(mainHeading.innerHTML)
// console.log(mainHeading);
// console.log(dom.window.document);
