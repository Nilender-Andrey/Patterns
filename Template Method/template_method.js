class Builder {
  build() {
    this.addEngine();
    this.installChassis();
    this.addElectronic();
    this.collectAccessories();
  }
}

class TeslaBuilder extends Builder {
  addEngine() {
    console.log('Add Tesla Engine');
  }
  installChassis() {
    console.log('Install Tesla chassis');
  }
  addElectronic() {
    console.log('Add Tesla electronic');
  }
  collectAccessories() {
    console.log('Collect Accessories');
  }
}

class BmwBuilder extends Builder {
  addEngine() {
    console.log('Add Bmw Engine');
  }
  installChassis() {
    console.log('Install Bmw chassis');
  }
  addElectronic() {
    console.log('Add Bmw electronic');
  }
  collectAccessories() {
    console.log('Collect Accessories');
  }
}

/* Проверка */

const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BmwBuilder();

teslaBuilder.build();

bmwBuilder.build();
