const hamButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-links');

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navLinks.classList.toggle('show');
    console.log('loaded.')
})