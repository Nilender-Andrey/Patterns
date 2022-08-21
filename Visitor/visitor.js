class Auto {
  accept(visitor) {
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return 'It is a Tesla car!';
  }
}
class Bmw extends Auto {
  info() {
    return 'It is a BMW car!';
  }
}
class Audi extends Auto {
  info() {
    return 'It is a Audi car!';
  }
}

/* попробовал разные варианты */
function exportVisitor(auto) {
  if (auto instanceof Tesla) auto.export = `Exported data: ${auto.info()}`;
  if (auto instanceof Bmw) auto.export = `Exported data: ${auto.info()}`;
  if (auto instanceof Audi) console.log(`Exported data: ${auto.info()}`);
}

const tesla = new Tesla();
const bmw = new Bmw();
const audi = new Audi();

tesla.accept(exportVisitor);
bmw.accept(exportVisitor);
audi.accept(exportVisitor);

console.log(tesla.export);
console.log(bmw.export);
