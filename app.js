const burger = document.querySelector('.burger');
const menu = document.querySelector("nav ul")

burger.addEventListener("click", function(e){
    menu.classList.toggle("mobile-menu")
})