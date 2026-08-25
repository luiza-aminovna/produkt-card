const profile = { // 3 задание
  name: "Луиза",
  surname: "Магомедова",
  age: 36,
  country: "Россия",
  city: "Махачкала",
  mail: "luiza@gmail.com",
  post: "Домохозяйка"
}
console.log(profile)



const car = { // 4 задание
  brand: "Toyota",
  model: "Camry",
  year: 2025,
  color: "Белый",
  engine: {
    type: "Бензиновый",
    volume: 2.5,
    power: 203
  },
  transmission: "Автоматическая",
}
car.owner = profile
console.log(car);



function checkSpeed(car) { //5 задание
  if (!("maxSpeed" in car)) {
    car ["maxSpeed"] = 200;
  }
}
checkSpeed(car);



function getPropertyObject(object, property) { // 6 задание
  console.log(object[property]);
}
getPropertyObject(car,"brand");



const products = ["Хлеб", "молоко", "сыр", "картошка", "зелень", "мясо"]; // 7 задание

console.log(products[3]);
console.log(products[5]);
console.log(products[2]);



const books = [ // 8 задание
  {
    title: "Сахих аль-Бухари",
    author: "Имам аль-Бухари",
    year: 846,
    coverColor: "Зеленый",
    genre: "Хадисы"
  },
  
  {
    title: "Рияд ас-Салихин",
    author: "Имам ан-Навави",
    year: 1272,
    coverColor: "Зеленый",
    genre: "Хадисы"
  },
  {
    title: "Сахих Муслим",
    author: "Имам Муслим",
    year: 875,
    coverColor: "Синий",
    genre: "Хадисы"
  },
  {
    title: "Китаб ат-Таухид",
    author: "Мухаммад ибн Абдуль-Ваххаб",
    year: 1740,
    coverColor: "Черный",
    genre: "Акида"
  },
]
books.push({
    title: "Аль-Адаб аль-Муфрад",
    author: "Имам аль-Бухари",
    year: 850,
    coverColor: "Коричневый",
    genre: "Нравственность и хадисы"
});

console.log(books);


const imamGhazaliBooks = [ // 9 задание
  {
    title: "Ихья улюм ад-дин 1 том",
    author: "Имам Абу Хамид аль-Газали",
    year: 2007,
    coverColor: "Зеленый",
    genre: "Философия, суфизм"
  },
  {
    title: "Ихья улюм ад-дин 2 том",
    author: "Имам Абу Хамид аль-Газали",
    year: 2016,
    coverColor: "Зеленый",
    genre: "Исламская этика, исцеление сердца, фикх"
  }
]

const allBooks = [...books, ...imamGhazaliBooks];

console.log(allBooks);



function addIsRare(imamGhazaliBooks) { // 10 задание
  return imamGhazaliBooks.map(imamGhazaliBook => {
    return {
      ...imamGhazaliBook,
      isRare: imamGhazaliBook.year > 2000
    };
  });
}

console.log(addIsRare(imamGhazaliBooks));