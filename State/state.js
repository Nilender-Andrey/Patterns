/* Статус заказа */

class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

/* Шаги доставки */

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered);
  }
}

/* Объект заказа */
class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }
  nextState() {
    this.state = this.state.next();
  }
}

/* Проверка */

const myOrder = new Order();

console.log(myOrder.state.name); // waitingForPayment

myOrder.nextState(); // переходим в следующее состояние
console.log(myOrder.state.name); // shipping

myOrder.nextState(); // переходим в следующее состояние
console.log(myOrder.state.name); // delivered
