/* class Driver {
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
} */

// мой вариант
class Driver {
  execute(command) {
    command.execute();
  }
}

class Engine {
  constructor() {
    this.state = false;
  }

  on() {
    this.state = true;
  }
  off() {
    this.state = false;
  }
}

class OnStartCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.on();
  }
}

class OnSwitchOffCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.off();
  }
}

/* Проверка */

const engine = new Engine();

console.log(engine); // Engine { state: false }

// Старт двигателя
/* 
const onStartCommand = new OnStartCommand(engine); // подготовили команду на включение
const driver = new Driver(onStartCommand);

driver.execute(); // выполнили команду
console.log(engine); 
*/

// мой вариант // не надо для каждой команды создавать водителя
const onStartCommand = new OnStartCommand(engine); // подготовили команду на включение
const onSwitchOffCommand = new OnSwitchOffCommand(engine); // подготовили команду на включение
const driver = new Driver();

driver.execute(onStartCommand); // выполнили команду старт
console.log(engine);

driver.execute(onSwitchOffCommand); // выполнили команду стоп
console.log(engine);
