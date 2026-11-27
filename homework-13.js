class Drink {
  #temperature;
  constructor(name, volume, temperature, price) {
    ((this.name = name),
      (this.volume = volume),
      (this.#temperature = temperature),
      (this.price = price));
    if (new.target === Drink) {
      throw new Error("Нельзя создать экземпляр абстрактного класса Drink");
    }
  }
  showInfo() {
    console.log(this.name, this.volume, this.#temperature, this.price);
  }
  getTemperature() {
    return this.#temperature;
  }
  establishTemperature(value) {
    if (value < 0 || value > 100) {
      console.log("Недопустимая температура");
      return;
    }
    this.#temperature = value;
  }
  #prepareDrink() {
    console.log(`Приготовление напитка: ${this.name}`);
  }
  serveDrink() {
    this.#prepareDrink();
    console.log(`Напиток $(this.name) подан!`);
  }
}

class Coffe extends Drink {
  constructor(name, volume, temperature, price, beans) {
    super(name, volume, temperature, price);
    this.beans = beans;
  }
}
const coffe = new Coffe("Bushido", 200, 85, 250, "Arabica");
coffe.showInfo();

class Tea extends Drink {
  constructor(name, volume, temperature, price, teaType) {
    super(name, volume, temperature, price);
    this.teaType = teaType;
  }
}
const tea = new Tea(
  "Safia tea",
  "250 мл",
  85,
  150,
  "Черный чай со вкусом бергамота",
);
tea.showInfo();

class Limonad extends Drink {
  constructor(name, volume, temperature, price, taste) {
    super(name, volume, temperature, price);
    this.taste = taste;
  }
}
const limonad = new Limonad(
  "Citrus elixir",
  "400 мл",
  6,
  300,
  "Лимонад с лаймом, мятой и юдзу",
);
limonad.showInfo();

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  showInfo() {
    console.log("Название кафе:", this.name);
    console.log("Местоположение:", this.location);
  }
  orderDrink(drink) {
    console.log("Вы заказали:", drink);
  }
}
const cafe = new Cafe("Coffe House", "Дагестан");
cafe.showInfo();
cafe.orderDrink("Citrus elixir");
cafe.orderDrink("Bushido");
