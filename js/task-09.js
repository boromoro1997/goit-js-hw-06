function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const showCurrentBodyColor = () => {
  currentColorEL.textContent = body.getAttribute("style").slice(18, body.getAttribute("style").length)
  console.log(body.getAttribute("style"))
}


const bodyColorChanger = () => {
  body.style.backgroundColor = getRandomHexColor();
  showCurrentBodyColor()
}

const currentColorEL = document.querySelector('.color')
const btnChangeColorEl = document.querySelector(".change-color");
const body = document.querySelector('body');
btnChangeColorEl.addEventListener("click", bodyColorChanger)