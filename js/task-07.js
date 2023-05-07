const inputEl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text")
spanText.style.fontSize = `${inputEl.value}px`


const fontSizeChanger = (event) => {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}

inputEl.addEventListener('input', fontSizeChanger);
