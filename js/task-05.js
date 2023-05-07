const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector("#name-output");
const nameOutputChanger = (event) => {
    nameOutputEl.textContent = event.currentTarget.value.trim()
};
const emptyInputChecker = () => {
    if (nameOutputEl.textContent === "" ) {
        nameOutputEl.textContent = "Anonymous"
    }
}
inputEl.addEventListener("input", nameOutputChanger);
inputEl.addEventListener("input", emptyInputChecker);
