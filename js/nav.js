const navUL = document.getElementById('primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.getElementsByClassName('.nav-li');

let navOpen = false;

// open & close mobile nav menu w/ hamburger & X icons

navToggle.addEventListener('click', () => {
    const visibility = navUL.getAttribute('data-visible');

    if (visibility === "false") {
        navUL.setAttribute('data-visible', "true");
        navToggle.setAttribute('aria-expanded', "true");
        navOpen = true;
    } else if (visibility === "true") {
        navUL.setAttribute('data-visible', "false");
        navToggle.setAttribute('aria-expanded', "false");
        navOpen = false;
    }
});

// close mobile nav menu by clicking nav link

navUL.addEventListener('click', (e) => {
    const navTarget = e.target;
    
    if (navOpen === true && navTarget !== navUL) {
        navUL.setAttribute('data-visible', "false");
        navToggle.setAttribute('aria-expanded', "false");
        navOpen = false;
    }
});

