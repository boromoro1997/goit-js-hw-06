const inputEl = document.querySelector('input[data-length]');
const inputMaxLength = Number.parseInt(inputEl.getAttribute("data-length"))

const inputLengthChecker = () => {
    if (inputEl.value.length === inputMaxLength) {
    inputEl.classList.remove("invalid")
    inputEl.classList.add("valid")
    } else {
    inputEl.classList.remove("valid")
    inputEl.classList.add("invalid") 
}
}

inputEl.addEventListener('blur', inputLengthChecker);