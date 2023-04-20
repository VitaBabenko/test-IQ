const listStar = document.querySelector('.list__wrap_star');
const link = document.querySelector('.form__link_geometry');
const wrapTest = document.querySelector('.wrapper__test');

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
  console.log('mmmm');
  const htmlString = `<div class="wrapper__test">
        <img
          src="./images/Group12.png"
          alt="Загрузка"
          width="260"
          class="wrapper__test_img"
        />
        <h2 class="wrapper__test_result">Обработка результатов</h2>
        <div class="preloader__row">
          <svg class="icon__loader" width="70" height="70">
            <use href="./images/symbol-defs.svg#icon-spinner"></use>
          </svg>
        </div>
        <p class="wrapper_result">
          Определение стиля мышления...............
          ...................................................
        </p>
      </div>`;
  wrapTest.innerHTML = htmlString;
};

listStar.addEventListener('click', onStarClick);
link.addEventListener('click', onClickLink);
