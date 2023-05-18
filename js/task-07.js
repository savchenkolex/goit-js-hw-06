/* Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.*/

const inputRangeEl = document.querySelector("#font-size-control");

inputRangeEl.addEventListener("input", inputRangeElHendler);

function inputRangeElHendler(event){
    const fontSize = Number(event.currentTarget.value);    
    document.querySelector("#text").style.fontSize = `${fontSize}px`;
}