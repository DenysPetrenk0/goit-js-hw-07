const btnDecrement = document.querySelector('[data-action = decrement]');
const btnIncrement = document.querySelector('[data-action = increment]');

let counterValue = 0;

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

function decrement() {
    counterValue -= 1;
    document.querySelector('#value').innerHTML = counterValue;
}

function increment() {
    counterValue += 1;
    document.querySelector('#value').innerHTML = counterValue;
}
