let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]')
const btnIncrement = document.querySelector('button[data-action="increment"]')

btnIncrement.addEventListener('click', function () {
    counterValue += 1
    valueEl.textContent = counterValue;
})

btnDecrement.addEventListener('click', function () {
    counterValue -= 1
    valueEl.textContent = counterValue;
} )
const valueEl = document.querySelector('#value')
