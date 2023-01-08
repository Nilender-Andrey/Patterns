class BMW {
  model: string;
  propA: number;
  propB: number;

  constructor(model: string, propA: number, propB: number) {
    this.model = model;
    this.propA = propA;
    this.propB = propB;
  }
}

class BMWFactory {
  create(model: string) {
    switch (model) {
      case 'X1':
        return new BMW(model, 1, 2);

      case 'X2':
        return new BMW(model, 3, 4);

      case 'X3':
        return new BMW(model, 4, 5);
    }
  }
}

const factory = new BMWFactory();
const x2 = factory.create('X2');

console.log(x2);
