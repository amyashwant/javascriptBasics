// this keyword
const btn = document.querySelector(".one");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);
});