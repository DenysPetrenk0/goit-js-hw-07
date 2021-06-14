const firstLiElem = document.querySelector('.item');
const h2TextFirst = firstLiElem.firstElementChild.textContent;
const quantityLiTegFirst = firstLiElem.childNodes[3].children.length;

console.log(`Категория: ${h2TextFirst}
Количество элементов: ${quantityLiTegFirst}`);

const secondLiElem = firstLiElem.nextSibling.nextSibling;
const h2TextSecond = secondLiElem.firstElementChild.textContent;
const quantityLiTegSecond = secondLiElem.childNodes[3].children.length;

console.log(`Категория: ${h2TextSecond}
Количество элементов: ${quantityLiTegSecond}`);

const thirdLiElem = secondLiElem.nextSibling.nextSibling;
const h2TextThird= thirdLiElem.firstElementChild.textContent;
const quantityLiTegThird = thirdLiElem.childNodes[3].children.length;

console.log(`Категория: ${h2TextThird}
Количество элементов: ${quantityLiTegThird}`);
