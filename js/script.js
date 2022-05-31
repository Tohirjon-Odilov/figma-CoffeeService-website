let navbar = document.querySelector(".navbar-text")
let menu = document.querySelector("#menu-btn")

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    menu.classList.add("fa-x")
}

window.onscroll = () => {
    navbar.classList.remove("active")
}
console.log(innerWidth);
console.log(innerHeight);

let tog1 = document.querySelector('.tog1')
let description1 = document.querySelector('.desc1')
let tog2 = document.querySelector('.tog2')
let description2 = document.querySelector('.desc2')
let tog3 = document.querySelector('.tog3')
let description3 = document.querySelector('.desc3')
let tog4 = document.querySelector('.tog4')
let description4 = document.querySelector('.desc4')
let tog5 = document.querySelector('.tog5')
let description5 = document.querySelector('.desc5')
let tog6 = document.querySelector('.tog6')
let description6 = document.querySelector('.desc6')

tog1.addEventListener('click', () => {
    description1.classList.toggle('d-block')
    tog1.classList.toggle('fa-chevron-up')
})
tog2.addEventListener('click', () => {
    description2.classList.toggle('d-block')
    tog2.classList.toggle('fa-chevron-up')
})
tog3.addEventListener('click', () => {
    description3.classList.toggle('d-block')
    tog3.classList.toggle('fa-chevron-up')
})
tog4.addEventListener('click', () => {
    description4.classList.toggle('d-block')
    tog4.classList.toggle('fa-chevron-up')
})
tog5.addEventListener('click', () => {
    description5.classList.toggle('d-block')
    tog5.classList.toggle('fa-chevron-up')
})
tog6.addEventListener('click', () => {
    description6.classList.toggle('d-block')
    tog6.classList.toggle('fa-chevron-up')
})

