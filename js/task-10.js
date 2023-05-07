
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
  if (amountOfBoxes >= Number(inputEl.min) && amountOfBoxes <= Number(inputEl.max)) {
    const boxes = [];
  for (let i = 0; i < amountOfBoxes; i += Number(inputEl.step)) {
    const boxSize = 30 + (10 * i);
    const box = `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;
    boxes.push(box);
    console.log(inputEl.step)
  }
  boxesContainer.insertAdjacentHTML("beforeend", boxes.join(""));
  } else {
    alert(`число має бути в проміжку від ${inputEl.min} до ${inputEl.max}`)
  }
}
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', () => {
  boxesContainer.innerHTML = ""
  inputEl.value = ""
})
