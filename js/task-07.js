const inputRangeEl = document.querySelector("#font-size-control");
const targetTxtEl = document.querySelector("#text");
const currentFontSize = inputRangeEl.value + "px";

targetTxtEl.style.fontSize = currentFontSize;

inputRangeEl.addEventListener("input", inputRangeElHendler);

function inputRangeElHendler(event){
    const fontSize = event.currentTarget.value;    
    targetTxtEl.style.fontSize = `${fontSize}px`;
}