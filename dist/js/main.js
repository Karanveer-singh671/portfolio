// select DOM items, querySelector works like Jquery 
// can choose any class or id 
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
// takes all elements as .nav-item and puts in nodeList
const navItems = document.querySelectorAll('.nav-item');

// show menu
let showMenuState = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenuState) {
        // adds close class to .menu-btn
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItems.forEach( item => item.classList.add('show'));
        // set menu to show to true 
        showMenuState = true;
    } else {
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItems.forEach( item => item.classList.remove('show'));
        // set menu to show to true 
        showMenuState = false;
    }
}