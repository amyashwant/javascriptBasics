const rootNode = document.getRootNode();
// console.log(rootNode)
const htmlElementNode = rootNode.childNodes[1];
console.log(htmlElementNode);
console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]
// console.log(htmlElementNode.childNodes[0])

const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(headElementNode.childNodes);
// sibling relation
// const h1 = document.querySelector("h1");
// const body = h1.parentNode;
// console.log(body)
// body.style.color = "grey";
// body.style.backgroundColor = "#333"
const body = document.body;
body.style.color = "red";
body.style.backgroundColor = "#333";
const head = document.querySelector("head");
console.log(head.childNodes);
const title = head.querySelector("title");
console.log(title.childNodes);
const container = document.querySelector(".second");
console.log(container.parentNode);
