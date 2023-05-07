function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = getRandomHexColor();


const bodyColorChanger = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  currentColorEL.textContent = color;
}

const currentColorEL = document.querySelector('.color')
const btnChangeColorEl = document.querySelector(".change-color");
const body = document.querySelector('body');
btnChangeColorEl.addEventListener("click", bodyColorChanger)