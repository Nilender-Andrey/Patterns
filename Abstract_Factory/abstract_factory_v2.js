/* 
function BMWFactorySport(model) {
  switch (model) {
    case 'X1':
      return new BMW_X_Series(model, 1, 2);
    case 'X2':
      return new BMW_X_Series(model, 3, 4);
    case 'X3':
      return new BMW_X_Series(model, 4, 5);
  }
}

function BMWFactoryFamily(model) {
  switch (model) {
    case 'Y1':
      return new BMW_Y_Series(model, 1, 2);
    case 'Y2':
      return new BMW_Y_Series(model, 3, 4);
    case 'Y3':
      return new BMW_Y_Series(model, 4, 5);
  }
}

class BMW_X_Series {
  constructor(model, propA, propB) {
    this.model = model;
    this.propA = propA;
    this.propB = propB;
  }
}

class BMW_Y_Series {
  constructor(model, propA, propB) {
    this.model = model;
    this.propA = propA;
    this.propB = propB;
  }
}

function bmwProducer(type) {
  switch (type) {
    case 'sport':
      return BMWFactorySport;
    case 'family':
      return BMWFactoryFamily;
    default:
      return null;
  }
}

const produceSport = bmwProducer('sport');
const carX1 = produceSport('X1');

console.log(carX1);

const produceFamily = bmwProducer('family');
const carY2 = produceFamily('Y2');
console.log(carY2);
 */
