/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
*/

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", checkDataLengthInput);

function checkDataLengthInput(event) {

  const classes = event.currentTarget.classList;
  const planLength = Number(event.currentTarget.dataset.length);
  const factLength = inputEl.value.length;

  factLength === planLength?setValid(classes):setInvalid(classes);
}

function setValid(classlistlink) {
  classlistlink.add("valid");
  classlistlink.remove("invalid");
}

function setInvalid(classlistlink){
  classlistlink.add("invalid");
  classlistlink.remove("valid");
}
