var typed = new Typed(".text", {
    strings:["WebDev Enthusiast","Problem solver","Quik-Learner"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};