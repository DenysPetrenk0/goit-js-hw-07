const inputNum = document.querySelector('#validation-input');


inputNum.addEventListener('input', event => {
    
    if (inputNum.value.length === (+inputNum.dataset.length)) {
        inputNum.classList.add('valid')
        inputNum.classList.remove('invalid')
    } else {
        inputNum.classList.add('invalid');
    }
});
