let navbar = document.querySelector(".navbar-text")
let menu = document.querySelector("#menu-btn")

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    menu.classList.add("fa-x")
}

window.onscroll = () => {
    navbar.classList.remove("active")
}