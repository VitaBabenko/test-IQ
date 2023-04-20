const listStar = document.querySelector('.list__wrap_star');
const link = document.querySelector('.form__link_geometry');
const wrapTest = document.querySelector('.wrapper__test');
const wrapResult = document.querySelector('.wrapper__result_test');

const onStarClick = evt => {
  const boxNumber = evt.target;
  if (!boxNumber.classList.contains('item_figurine')) {
    return;
  }

  const currentActiveNumber = document.querySelector('.is-active');
  if (currentActiveNumber) {
    currentActiveNumber.classList.remove('is-active');
  }

  boxNumber.classList.add('is-active');
};

const onClickLink = () => {
  wrapTest.classList.add('visually-hidden');
  wrapResult.classList.remove('visually-hidden');

  setTimeout(() => {
    const resultWrap = document.querySelector('.wrapper__result');
    resultWrap.classList.remove('visually-hidden');
    wrapResult.classList.add('visually-hidden');
  }, 5000);
};

listStar.addEventListener('click', onStarClick);
link.addEventListener('click', onClickLink);
