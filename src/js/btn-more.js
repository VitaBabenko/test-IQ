const btnMore = document.querySelector('.section__hero_btn-more');
const overlayWrap = document.querySelector('.overlay__wrap');
const sectionHero = document.querySelector('.section__hero');

const onBtnMore = () => {
  overlayWrap.classList.remove('visually-hidden');
  sectionHero.classList.add('visually-hidden');
};

btnMore.addEventListener('click', onBtnMore);
