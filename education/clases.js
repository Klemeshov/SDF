class A {
  constructor(str) {
    console.log('constructor A', str);
  }

  render() {}

  draw() {
    const a = this.render();
    console.log(a);
  }
}

class B extends A {
  render() {
    return 'Я рисуюсь';
  }
}

const b = new B();

b.draw();
