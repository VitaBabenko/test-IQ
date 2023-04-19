const openBtnMenu = document.querySelector('.nav__menu_btn');
const closeBtnMenu = document.querySelector('.mob__menu_close-btn');
const menu = document.querySelector('.mob__menu');

const toggleMenu = () => {
  menu.classList.toggle('mob__menu_is-hidden');
};

openBtnMenu.addEventListener('click', toggleMenu);
closeBtnMenu.addEventListener('click', toggleMenu);
