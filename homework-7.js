function showTemperature(city,temperature) { // 3 задание
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по цельсию`);
}
showTemperature('Махачкала', 30);
showTemperature('Кизляр', 20);



const speedOfLight = 299792458; // м/с   > 4 заание

function checkSpeed(speed) {
  if(speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if(speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}
checkSpeed(299792459);


let product = "Телефон"; // 5 задание
let price = 80000;

function buyProduct(budget) {
  if(budget >= price) {
    console.log(`${product} приобретен Спасибо за покупку!`);
  } else {
    let differens = price - budget;
    console.log(`Вам не хватает ${differens}Р, пополните баланс`);
  }
}
buyProduct(60000);


const cost = 1000; // пример Жансауле

function showIfElse(number) {
  if(number > 10000) {
    console.log("число больше 10000");
  } else if(number === 10000) {
    console.log("число равно 10000");
  } else {
    console.log("число меньше 10000");
  }
}
showIfElse(800);
showIfElse(cost);


function printReport(number) { // 6 задание
  console.log(number);
}
printReport(800);


const firstName = "Луиза"; // 7 задание
const lastName = "Магомедова";
const phoneNumber = "12345678900";