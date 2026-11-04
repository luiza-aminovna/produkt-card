// Покраска всех карточек

const productCards = document.querySelectorAll(".card"); // Массив
const changeColorAllCardButton = document.querySelector(
  "#change-color-all-card",
);
const greenColorHash = "#00c91b";
const blueColorHash = "#0000ff";

changeColorAllCardButton.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = greenColorHash));
});

// Покраска второй карточки

const secondProductCard = document.querySelector(".card");
const changeColorSecondCardButton = document.querySelector(
  "#change-color-second-card",
);

changeColorSecondCardButton.addEventListener("click", () => {
  secondProductCard.style.backgroundColor = blueColorHash;
});

// Открыть Google

const openGoogleButton = document.querySelector("#open-google");

openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open("https://google.com");
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector("#output-console-log");

outputLogButton.addEventListener("click", () => outputConsoleLog("ДЗ №6"));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// Домашняя работа

const changeHeaderColorButton = document.querySelector("#change-header-color"); // Получить элемент

changeHeaderColorButton.addEventListener("click", () => {
  changeHeaderColorButton.classList.toggle("button--active");
  console.log("кнопка нажата");
});

// 12 домашка

import { Modal } from "./modal.js";
import { Form } from "./form.js";
const registerModal = new Modal("registration-modal");
const registerForm = new Form("registration-form");
const registerBtn = document.getElementById("registration-btn");

registerBtn.addEventListener("click", () => {
  registerModal.open();
});

registerForm.form.addEventListener("submit", (event) => {
  event.preventDefault();
  // 1) валидируем форму
  if (!registerForm.isFormValid()) {
    alert("Форма невалидна, заполниет корректно");
    return;
  }
  // 2) получаем данные из формы
  const values = registerForm.getFormData();

  if (values.password !== values.repeatPassword) {
    alert("Пароли не совпадают");
  }
  delete values.password;
  delete values.repeatPassword;
  console.log(values);
});
