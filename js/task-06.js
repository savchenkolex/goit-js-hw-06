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
  const characters = Number(event.currentTarget.dataset.length);

  // if (inputEl.textLength === characters ) {
    // "textLength" property doesn't work with chrome
  if (inputEl.value.length === characters ) {
    classes.contains("invalid")
    ? classes.replace("invalid", "valid")
    : classes.add("valid");
  } else {
    classes.contains("valid")
      ? classes.replace("valid", "invalid")
      : classes.add("invalid");
  }
}
