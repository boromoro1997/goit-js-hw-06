const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector("#name-output");
const nameOutputChanger = (event) => {
    nameOutputEl.textContent = event.currentTarget.value
};
const emptyInputChecker = () => {
    if (nameOutputEl.textContent === "" || nameOutputEl.textContent === " ") {
        nameOutputEl.textContent = "Anonimus"
    }
}
inputEl.addEventListener("input", nameOutputChanger);
inputEl.addEventListener("blur", emptyInputChecker);
