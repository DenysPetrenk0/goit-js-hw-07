const ref = { 
    btnCreate: document.querySelector('[data-action = render]'),
    btnRemove: document.querySelector('[data-action = destroy]'),
    divReceive: document.querySelector('#boxes'),
}

ref.btnCreate.addEventListener('click', event => createBoxes(document.querySelector('input').value));
ref.btnRemove.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    let size = 30
    for (let i = 0; i < amount; i++) {
        const newDiv = document.createElement('div');
        newDiv.style.width = size + 'px';
        newDiv.style.height = size + 'px';
        newDiv.style.background = `rgb(${getRandomArbitrary(0, 255)},
                                        ${getRandomArbitrary(0, 255)},
                                        ${getRandomArbitrary(0, 255)}`;
        ref.divReceive.append(newDiv);
        size += 10;
    }
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

function destroyBoxes() {    
    while (ref.divReceive.firstChild) {
    ref.divReceive.removeChild(ref.divReceive.firstChild);
    }
};