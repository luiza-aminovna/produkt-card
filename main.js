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
