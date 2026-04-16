// script.js

// Smooth scrolling for navigation links
const smoothScrollTo = (target) => {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
};

const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(evt) {
        evt.preventDefault();
        smoothScrollTo(this.getAttribute('href'));
    });
});

// Animation to elements on scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const handleScroll = () => {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add('fade-in');
        } else {
            el.classList.remove('fade-in');
        }
    });
};

window.addEventListener('scroll', handleScroll);

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;
const handleNavbarScroll = () => {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

window.addEventListener('scroll', handleNavbarScroll);

// Active nav link highlighting
const highlightNavLink = () => {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavLink);