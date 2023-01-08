class Auto {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor() {
    this.model = {};
  }

  create(name) {
    let model = this.model[name];

    if (model) return model;

    console.count('model');
    this.model[name] = new Auto(name);
    return this.model[name];
  }

  getModels() {
    console.table(this.model);
  }
}

const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const tesla = factory.create('Tesla');
const blackTesla = factory.create('Tesla');

console.log(factory.getModels());
