
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls").firstElementChild;
const boxesContainer = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

let amountOfBoxes = 0;

inputEl.addEventListener('input', (event) => {
amountOfBoxes = event.currentTarget.value;
});
function createBoxes() {
  const boxes = [];
  for (let i = 0; i < amountOfBoxes; i += 1) {
    const boxSize = 30 + (10 * i);
    const box = `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;
    boxes.push(box);
  }
  boxesContainer.insertAdjacentHTML("beforeend", boxes.join(""));
}
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', () => {
  boxesContainer.innerHTML = ""
})