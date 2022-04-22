/* class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }

    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCounter = () => this.count;
  incrementCounter = () => this.count++;
}

Counter.instance = undefined;

const count_1 = new Counter();
const count_2 = new Counter();

count_1.incrementCounter();
count_2.incrementCounter();
count_2.incrementCounter();
count_2.incrementCounter();

console.log(count_1 === count_2);

console.log(count_1.getCounter()); // 4
console.log(count_2.getCounter()); // 4
 */
