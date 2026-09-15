import products from "./products.js"; // 2 задание

console.log(products);

console.log(products[0]); // можно вывести отдельно
console.log(products[0].title);



function getNumberCard() { // 5 задание
  let number;
  while (true) {
  number = prompt("Сколько карточек отобразить? От 1 до 5");
  number = Number(number); // функция
    if (number >= 1 && number <= 5 && Number.isInteger(number)) {
    return number;
  }
  alert("Пожалуйста введите число от 1 до 5");
  }
}


function renderCards(products)  { // products массив который получает функция + 3 задание (шаблон)
  const container = document.querySelector(".products");
  const cards = products.map((product) => {
    return `
    <div class="product-card">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>${product.price} ₽</p>
      <ul>
        <li>${product.structure[0]}</li>
        <li>${product.structure[1]}</li>
        <li>${product.structure[2]}</li>
      </ul>
    </div>
    `;
  });
  container.innerHTML = cards.join(""); // join превращает массив карточек в одну HTML строку затем вставляет в div
};

const numberCards = getNumberCard();
const cardsToRender = products.slice(0,numberCards);
renderCards(cardsToRender);

console.log(numberCards);
console.log(cardsToRender);


//return - шаблон карточки
//<div class="product-card"></div>    js находит этот div и сохраняет в контейнере



const productsDescription = products.reduce((result, product) => { // 4 задание
  result[product.title] = product.description; // квадратные кавычки? потому что название ключа мы получаем из переменной
  return result;
}, {});

console.log(productsDescription);

