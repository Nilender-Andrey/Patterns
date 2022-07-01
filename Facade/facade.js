class Conveyor {
  setBody() {
    console.log('Body set!');
  }
  getEngine() {
    console.log('Dismantle Engine!');
  }
  setEngine() {
    console.log('Engine set!');
  }
  setInterior() {
    console.log('Exterior added!');
  }
  getInterior() {
    console.log('Update interior!');
  }
  setExtetior() {
    console.log('Added interior!');
  }
  setWheels() {
    console.log('Wheels!');
  }
  addElectronics() {
    console.log('Added electronics!');
  }
  paint() {
    console.log('Car painted!');
  }
}

class ConveyorFacade {
  constructor(car) {
    this.car = car;
  }

  assemblerCar() {
    this.car.setBody();
    this.car.getEngine();
    this.car.setEngine();
    this.car.setInterior();
    this.car.getInterior();
    this.car.setExtetior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();

    console.log('\n');
  }

  changeEngine() {
    this.car.getEngine();
    this.car.setEngine();

    console.log('\n');
  }

  changeInterior() {
    this.car.getInterior();
    this.car.setInterior();

    console.log('\n');
  }
}

const conveyor = new ConveyorFacade(new Conveyor());
let car = conveyor.assemblerCar();

car = conveyor.changeEngine();
car = conveyor.changeInterior();

//console.log(car);
