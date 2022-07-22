class OfficialDealer {
  constructor() {
    this.customer = []; // массив покупателей
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName();

    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);

    this.addCustomersList(name);
  }

  addCustomersList(name) {
    this.customer.push(name);
  }

  getCustomerList() {
    return this.customer;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}

/* тест */

const mediator = new OfficialDealer();

const user_1 = new Customer('User_1', mediator);
const user_2 = new Customer('User_2', mediator);

user_1.makeOrder('Tesla', 'with autopilot');
user_2.makeOrder('Audi', 'with parktronik!');

console.log(mediator.getCustomerList());
