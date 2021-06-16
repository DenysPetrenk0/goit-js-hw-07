const liElem = document.querySelectorAll('.item');

liElem.forEach(elem => {
    console.log(`
    Категория: ${elem.children[0].textContent}
    Количество элементов: ${elem.children[1].children.length}
    `);    
});


