const navToggle = document.querySelector(".nav-toggler")
const links = document.querySelector(".links")
const dark = document.querySelector(".dark-mode")

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
    dark.classList.toggle("dark")
});