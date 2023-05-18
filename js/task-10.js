function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Оскільки ця задача не обов'язкова, я в ній трішки погрався заради втіхи. Так, задача виконана ідеологічно не правильно, але це було весело і, зрештою, все працює.

const controlsEl = document.querySelector("#controls");
const targetBoxEl = document.querySelector("#boxes");

controlsEl.addEventListener('click',createBoxes)

function createBoxes(event) {
  let amount = event.currentTarget.firstElementChild.valueAsNumber;
  
  if (event.target.type === "button") {
    const buttonEl = event.target;
  
    if (buttonEl.dataset.hasOwnProperty("destroy")){
      targetBoxEl.innerHTML = "";
    } else if (buttonEl.dataset.hasOwnProperty("create")){
    
      if (amount < 1) {
        const newEl = document.createElement("p");
        newEl.textContent = "Nothing to create. The number of elements must be greater then zero";
        targetBoxEl.append(newEl);
      } else if (amount > 100){
        amount = 100;
      } 

      let i = 0;
      let demension = 30;
      const newBoxesArr = [];
      
      while ( i < amount){
        i += 1;
        // let demension = Math.random() * (100 - 10) + 10;
        const newBoxEl = document.createElement("div");
        newBoxEl.style.backgroundColor = getRandomHexColor();
        newBoxEl.style.width = demension + "px";
        newBoxEl.style.height = demension + "px";
        newBoxesArr.push(newBoxEl);
        // demension += 10;
      }
      targetBoxEl.append(...newBoxesArr);
    }
  }
}


