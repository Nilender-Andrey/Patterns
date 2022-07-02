class TeslaCar {
  model: string;
  prise: number;
  interior: string;
  autopilot: boolean;

  constructor(
    model: string,
    prise: number,
    interior: string,
    autopilot: boolean,
  ) {
    this.model = model;
    this.prise = prise;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.prise, this.interior, this.autopilot);
  }
}

// эталонный авто
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

// клоны эталонного авто
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// вносим изменения в первый авто
car1.interior = 'white';
car1.autopilot = true;

console.log(car1);
console.log(car2);
console.log(car3);
