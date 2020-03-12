// Your code goes here
// EXAMPLE:
let logo = document.querySelector("h1.logo-heading");
logo.addEventListener("dblclick", event => event.target.style.color = "lightblue");

let bodyColor = document.querySelector("body");
bodyColor.addEventListener("keyup", event => event.target.style.backgroundColor = "#aaf0d1");

let headerColor = document.querySelector("header");
headerColor.addEventListener("mouseover", event => event.target.style.backgroundColor = "#C8A2C8");

let headerimg = document.querySelector(".intro img");
headerimg.addEventListener("drag", event => {
    headerimg.setAttribute("src", "img/hello-kitty-credit-sanrio.jpg")
});

let footerColor = document.querySelector("footer");
footerColor.addEventListener("click", event => event.target.style.backgroundColor = "hotpink");

let bodyTitle = document.querySelector("h2.body-title");
bodyTitle.addEventListener("mouseleave", event => event.target.style.color = "hotpink" );


let btnColor = document.querySelectorAll(".btn");
btnColor.forEach(element => {
    element.addEventListener("mouseenter", event => event.target.style.backgroundColor = "hotpink"
)});

let firstimg = document.querySelector(".img-content img");
firstimg.addEventListener("mousemove", event => {
    firstimg.setAttribute("src", "img/hk.jpeg")
});

// fix this later, new img is popping up over first edited img
let secondimg = document.querySelector(".second-img img");
secondimg.addEventListener("click", event => {
    secondimg.setAttribute("src", "img/bow.jpg")
});

let dest = document.querySelectorAll("div.destination p");
dest.forEach(element => {
    element.addEventListener("dblclick", event => event.target.style.color = "hotpink"
)});

//TASK TWO EXAMPLE:
let navbar = document.querySelectorAll("a.nav-link");
navbar.forEach(btn => {
    event.stopPropagation()
    event.preventDefault()
});





