const openBtnMenu = document.querySelector('.nav__menu_btn');
const closeBtnMenu = document.querySelector('.mob__menu_close-btn');
const menu = document.querySelector('.mob__menu');
const itemHome = document.querySelector('.home');
const itemAbout = document.querySelector('.about');
const heroSection = document.querySelector('.section__hero');
const wrapOverlay = document.querySelector('.overlay__wrap');

const toggleMenu = () => {
  menu.classList.toggle('mob__menu_is-hidden');
};

const onItemHome = () => {
  menu.classList.add('mob__menu_is-hidden');
  wrapOverlay.classList.add('visually-hidden');
  heroSection.classList.remove('visually-hidden');
};

const onItemAbout = () => {
  menu.classList.add('mob__menu_is-hidden');
  wrapOverlay.classList.remove('visually-hidden');
  heroSection.classList.add('visually-hidden');
};

openBtnMenu.addEventListener('click', toggleMenu);
closeBtnMenu.addEventListener('click', toggleMenu);
itemHome.addEventListener('click', onItemHome);
itemAbout.addEventListener('click', onItemAbout);
