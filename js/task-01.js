const numbersOfcategories = document.querySelector("#categories")
const categoriesItems = document.querySelectorAll('.item')
// const countItems = () => console.log(numbersOfcategories.children.length);


console.log(`Number of categories: ${categoriesItems.length}`)

categoriesItems.forEach((element) => console.log(`Category: ${element.firstElementChild.textContent}
Elements: ${element.lastElementChild.children.length}`))
