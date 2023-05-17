function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", buttonChangeColorHendler);

function buttonChangeColorHendler(event){
  const nextColor = getRandomHexColor();
  if(event){

    document.querySelector("body").style.backgroundColor = nextColor;
    document.querySelector(".color").textContent = nextColor;
  }
}