class Engine2 {
  simpleInterface() {
    console.log('Engine 2.0 - tr-tr-tr');
  }
}

class EngineV8 {
  complicatedInterface() {
    console.log('Engine V8! - wroom wroom!');
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complicatedInterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface();
  }
}

// 2.0
const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine); // Engine 2.0 - tr-tr-tr

// v8

const engineAdapter = new EngineV8Adapter(new EngineV8());

myCar.startEngine(engineAdapter); // Engine V8! - wroom wroom!

// v8 without adapter

const engineV8 = new EngineV8();

myCar.startEngine(engineV8); // error
