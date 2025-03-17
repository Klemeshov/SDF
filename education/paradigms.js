// ООП - объектно ориентированное программирование

// Полиморфизм
// Наследование
// Инкапсуляция
// Абстракция

const getPoint = (x, y) => ({
  x: x,
  y: y
});

const Line = [getPoint(0, 0), getPoint(1, 2)];

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get x() {
    return this.x;
  }
  get y() {
    return this.y;
  }
}

class Vector extends Point {
  constructor(x, y) {
    super(x, y);
  }

  sum(a, b) {
    /* сумма векторов */

    return new Vector(a.x + b.x, a.y + b.y);
  }
}

// ФП - Функциональное программирование

// Декларативность
// Чистые функции
// Иммутабельность
// Функции первого класс и функции высшего порядка

const Shoot = () => {
  registerShoot();
  minPatron();
  checkReload();
};

const Container = () => {
  const response = request();
  PureFunction(0, 1, response);
};

const PureFunction = (a, b, response) => {
  return a + b;
};

const sort = (arr) => {
  const newArr = [...arr];

  return newArr.sort();
};

const data = [];

data.filter().sort().get5();
