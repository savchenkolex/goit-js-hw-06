const categories = document.querySelector('#categories');

console.log(`Number of categories: ${categories.childElementCount}`);

const listAll = document.querySelectorAll("#categories .item");
listAll.forEach((el)=>{
    console.log(`Cactegory: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.childElementCount}`);
});