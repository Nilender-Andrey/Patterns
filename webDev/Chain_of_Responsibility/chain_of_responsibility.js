class Account {
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Оплата ${orderPrice} произведена с ${this.name}`);
    } else if (this.incomer) {
      console.log(`Не могу оплатить с ${this.name}`);
      this.incomer.pay(orderPrice);
    } else {
      console.log('На счетах не достаточно денег');
    }
  }

  canPay(amount) {
    return this.balance >= amount;
  }

  setNext(account) {
    this.incomer = account;
  }

  show() {
    console.log(this);
  }
}

//* Счета */

class Master extends Account {
  constructor(balance) {
    super();
    this.name = 'Master Card';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super();
    this.name = 'Qiwi';
    this.balance = balance;
  }
}

//* Проверка */
const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

//* Цепочка приемников */
master.setNext(paypal);
paypal.setNext(qiwi);

//* Оплата */

console.log(master.pay(438));
console.log(master.show());
