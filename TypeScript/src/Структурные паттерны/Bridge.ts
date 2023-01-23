interface IProvider {
  sendMessage(message: string): void;
  connect<T>(config: T): void;
  disconnect(): void;
}

class TelegramProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect<T>(config: T): void {
    console.log(config);
  }
  disconnect(): void {
    console.log('Disconnected TG');
  }
}

class WhatsUpProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect<T>(config: T): void {
    console.log(config);
  }
  disconnect(): void {
    console.log('Disconnected WU');
  }
}

class NotificationCenter {
  constructor(private provider: IProvider) {}

  send() {
    this.provider.connect('connect');
    this.provider.sendMessage('message');
    this.provider.disconnect();
  }
}

class DelayNotificationCenter extends NotificationCenter {
  constructor(provider: IProvider) {
    super(provider);
  }

  send() {}
}

const sender1 = new NotificationCenter(new TelegramProvider());
sender1.send();

const sender2 = new NotificationCenter(new WhatsUpProvider());
sender2.send();
