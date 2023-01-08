// Во всех объектно-ориентированных языках конструктор - это просто специальный метод, чтобы создавать новые объекты в памяти.

// без использования классов
/* 
function Server(name, ip) {
  this.name = name;
  this.ip = ip;
}

Server.prototype.getUrl = function () {
  return `https://${this.ip}:80`;
};

const aws = new Server('AWS German', '82.21.21.32');
console.log(aws.getUrl());
 */

// С использованием классов
class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }
  getUrl() {
    return `https://${this.ip}:80`;
  }
}

const aws = new Server('AWS German', '82.21.21.32');
console.log(aws.getUrl());
