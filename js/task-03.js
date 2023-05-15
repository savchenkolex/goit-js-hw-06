const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/*Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.*/

// const items = images.map((el)=>{
//     const liEl = document.createElement("li");
//     const imgEl = document.createElement("img");
//     liEl.classList.add("gallery-item");
//     imgEl.alt = el.alt;
//     imgEl.src = el.url;
//     imgEl.width = "100";
//     liEl.append(imgEl);
//     return liEl;
//   })
//   document.querySelector(".gallery").append(...items);
const galleryBox = document.querySelector(".gallery");

function createGallery (arr) {
 const itemsArr = arr.map((el)=>{
    const item = `<li class="gallery-item">
    <img src="${el.url}" alt="${el.alt}" width="100">
    </li>`;
    return item;
  })
  return itemsArr.join('');
}
  
galleryBox.insertAdjacentHTML("beforeend",createGallery(images));