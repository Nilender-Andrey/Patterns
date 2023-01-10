class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

// первый декоратор
function aws(server) {
  server.isAWS = true;
  server.awsInfo = () => server.url;

  return server;
}

const s1 = aws(new Server('12.34.56.77', 8080));
console.log(s1.isAWS);
console.log(s1.awsInfo());

// второй декоратор
function azure(server) {
  server.isAzure = true;
  server.port += 500;
  return server;
}

const s2 = azure(new Server('98.78.1.2', 1000));
console.log(s2.isAzure);
console.log(s2.url);
