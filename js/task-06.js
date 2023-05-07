const inputEl = document.querySelector('input[data-length]');
const inputMaxLength = Number.parseInt(inputEl.getAttribute("data-length"))

const inputLengthChecker = () => {
    inputEl.value.length === inputMaxLength ?
        classListSwaper("valid", "invalid") :
        classListSwaper("invalid", "valid")
}

inputEl.addEventListener('blur', inputLengthChecker);

function classListSwaper(calssToRemove, classToAdd) {
    inputEl.classList.remove(classToAdd)
    inputEl.classList.add(calssToRemove) 
}