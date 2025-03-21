'use strict';

const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', changeColor);

function changeColor(event) {
  const colorToChange = getRandomHexColor();

  event.preventDefault();
  bodyEl.style.backgroundColor = colorToChange;
  spanEl.textContent = colorToChange;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
