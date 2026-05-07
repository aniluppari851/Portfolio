var typed = new Typed(".text", {
    strings:["WebDev Enthusiast","Problem solver","Quik-Learner"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

/* --- SCROLL SECTION ACTIVE LINK --- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Match the href exactly with the id
            let targetLink = document.querySelector('.navbar a[href*=' + id + ']');
            if (targetLink) {
                targetLink.classList.add('active');
            }
        };
    });

    /* --- STICKY NAVBAR --- */
    let header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    /* --- REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL) --- */
    if (typeof menuIcon !== 'undefined' && typeof navbar !== 'undefined') {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

/* --- TOGGLE NAVBAR --- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}