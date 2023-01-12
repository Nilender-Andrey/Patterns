class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      });
    }
  }
}

const user_1 = new User('Вася');
const user_2 = new User('Коля');
const user_3 = new User('Петя');

const room = new ChatRoom();

room.register(user_1);
room.register(user_2);
room.register(user_3);

user_1.send('Привет', user_2);
user_2.send('Привет!', user_1);
user_3.send('Всем привет!');
