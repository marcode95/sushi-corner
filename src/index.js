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
  mainPage.classList.add('show');
  mainPage.classList.remove('hide');
  menuPage.classList.add('hide');
  menuPage.classList.remove('show');
  contactPage.classList.add('hide');
  contactPage.classList.remove('show');
});

menuButton.addEventListener('click', () => {
  mainPage.classList.add('hide');
  mainPage.classList.remove('show');
  menuPage.classList.add('show');
  menuPage.classList.remove('hide');
  contactPage.classList.add('hide');
  contactPage.classList.remove('show');
});

contactButton.addEventListener('click', () => {
  mainPage.classList.add('hide');
  mainPage.classList.remove('show');
  menuPage.classList.add('hide');
  menuPage.classList.remove('show');
  contactPage.classList.add('show');
  contactPage.classList.remove('hide');
});
