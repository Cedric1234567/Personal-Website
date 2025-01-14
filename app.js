const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const aboutPic = document.querySelector('.about-pic');

    if (aboutPic) {
        const originalSrc = aboutPic.getAttribute('src');
        const hoverSrc = 'images/mefoot.JPG';

        aboutPic.addEventListener('mouseenter', () => {
            aboutPic.setAttribute('src', hoverSrc);
        });

        aboutPic.addEventListener('mouseleave', () => {
            aboutPic.setAttribute('src', originalSrc);
        });
    }
});