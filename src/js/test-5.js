const colorContainer = document.querySelector('.form__wrap_color');

const onClickBox = evt => {
  if (!evt.target.classList.contains('square-color')) {
    return;
  }
  console.log(evt.target);
  const boxColor = evt.target;

  boxColor.classList.add('is-active');
};

colorContainer.addEventListener('click', onClickBox);
