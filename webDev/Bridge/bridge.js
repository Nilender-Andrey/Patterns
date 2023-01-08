class Model {
  constructor(color) {
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
}
/* Color */
/***********************************/
class BlackColor extends Color {
  constructor() {
    super('dark-black');
  }
}

class SilbrigColor extends Color {
  constructor() {
    super('Silbermetallic');
  }
}

/* Model */
/***********************************/

class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
}

class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
}

/***********************************/

const blackBmw = new Bmw(new BlackColor());
console.log(blackBmw.paint());

const blackAudi = new Audi(new BlackColor());
console.log(blackAudi.paint());

const silverBmw = new Bmw(new SilbrigColor());
console.log(silverBmw.paint());

const silverAudi = new Audi(new SilbrigColor());
console.log(silverAudi.paint());
