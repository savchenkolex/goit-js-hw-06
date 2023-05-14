const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map((el) => {
  const listEl = document.createElement("li");
  listEl.textContent = el;
  listEl.classList.add("item");
  return listEl;
})
document.querySelector("#ingredients").append(...ingredientsList);