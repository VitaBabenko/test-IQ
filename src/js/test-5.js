const colorContainer = document.querySelector('.form__wrap_color');

const onClickBox = evt => {
  const boxColor = evt.target;
  if (!boxColor.classList.contains('btn-color')) {
    return;
  }

  const currentActiveColor = document.querySelector('.is-active');
  if (currentActiveColor) {
    currentActiveColor.classList.remove('is-active');
  }

  boxColor.classList.add('is-active');
};

colorContainer.addEventListener('click', onClickBox);
