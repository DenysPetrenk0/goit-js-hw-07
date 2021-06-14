const btn = document.querySelector('button');
let scoreA = 0;

btn.onclick = function () {
    
    if (btn.dataset.decrement) {
        scoreA -= 1;
        document.querySelector('value').innerHTML = `${scoreA}`;
    }

    if (btn.dataset.increment) {
        scoreA += 1;
        document.querySelector('value').innerHTML = `${scoreA}`;
    }
};