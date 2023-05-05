const inputEl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text")


const fontSizeChanger = (event) => {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}

inputEl.addEventListener('change', fontSizeChanger);
