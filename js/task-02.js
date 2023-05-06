const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingridientsList = document.querySelector("#ingredients")
const listCreator = (list) => {
 return list.map((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item")
  item.textContent = ingredient;
  return item
  })
}
const newList = listCreator(ingredients);
console.log(newList)
ingridientsList.append(...newList)


