const numbersOfcategories = document.querySelector("#categories")
const categoriesItems = document.querySelectorAll('.item')
// const countItems = () => console.log(numbersOfcategories.children.length);

const countItems = (items) =>  items.length;
console.log(`Number of categories: ${countItems(categoriesItems)}`)

categoriesItems.forEach((element) => console.log(`Category: ${element.firstElementChild.textContent}
Elements: ${countItems(element.lastElementChild.children)}`))
