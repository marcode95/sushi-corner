import header from './components/header';
import main from './components/main';
import menu from './components/menu';
import contact from './components/contact';


header();
main();
menu();
contact();

const mainButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

const mainPage = document.getElementById('main-page');
const menuPage = document.getElementById('menu-page');
const contactPage = document.getElementById('contact-page');

mainButton.addEventListener('click', () => {
  mainPage.style.display = 'block';
  menuPage.style.display = 'none';
  contactPage.style.display = 'none';
});

menuButton.addEventListener('click', () => {
  mainPage.style.display = 'none';
  menuPage.style.display = 'block';
  contactPage.style.display = 'none';
});

contactButton.addEventListener('click', () => {
  mainPage.style.display = 'none';
  menuPage.style.display = 'none';
  contactPage.style.display = 'block';
});


