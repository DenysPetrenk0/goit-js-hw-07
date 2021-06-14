const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulElem = document.querySelector('#ingredients');
const listIngredients = ingredients.map(ingredient => {

  const liElem = document.createElement('li');
  liElem.textContent = ingredient;
  return liElem;
});

ulElem.append(...listIngredients);