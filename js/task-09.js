function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", buttonChangeColorHendler);

function buttonChangeColorHendler(event){
  const nextColor = getRandomHexColor();
  if(event){

    bodyEl.style.backgroundColor = nextColor;
    spanEl.textContent = nextColor;
  }
}