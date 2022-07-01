class Car {
  constructor() {
    this.price = 10000;
    this.model = 'Car';
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

class Parktronic {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = 'Tesla';
  }
}

class Audi extends Car {
  constructor() {
    super();
    this.price = 20000;
    this.model = 'Audi';
  }
}

/* **************************************************************** */
let teslaFull = new Tesla();
teslaFull = new Autopilot(teslaFull);
teslaFull = new Parktronic(teslaFull);

console.log(teslaFull.getPrice(), teslaFull.getDescription());

/* **************************************************************** */
let teslaAutopilot = new Tesla();
teslaAutopilot = new Autopilot(teslaAutopilot);

console.log(teslaAutopilot.getPrice(), teslaAutopilot.getDescription());

/* **************************************************************** */
let audiAutopilot = new Audi();
audiAutopilot = new Autopilot(audiAutopilot);

console.log(audiAutopilot.getPrice(), audiAutopilot.getDescription());
