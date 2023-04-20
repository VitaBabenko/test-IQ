const listFigurine = document.querySelector('.list__wrap_figurine');

const onFigurineClick = evt => {
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

listFigurine.addEventListener('click', onFigurineClick);
