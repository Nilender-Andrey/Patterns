class Counter {
  static instance: Counter;
  count: number = 0;

  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }

    Counter.instance = this;
    return this;
  }

  getCounter = (): number => this.count;

  incrementCounter = () => this.count++;
}

const count1 = new Counter();
const count2 = new Counter();

count1.incrementCounter();
count2.incrementCounter();
count2.incrementCounter();
count2.incrementCounter();

console.log(count1 === count2);

console.log(count1.getCounter()); // 4
console.log(count2.getCounter()); // 4
