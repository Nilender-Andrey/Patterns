interface Mediator {
  notify(sender: string, event: string): void;
}

abstract class Mediated {
  mediator!: Mediator;

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}

class Notifications {
  send() {
    console.log('Отправить уведомление');
  }
}

class Log {
  log(message: string) {
    console.log(message);
  }
}
class EventHandler extends Mediated {
  myEvent() {
    this.mediator.notify('EventHandler', 'myEvent');
  }
}

class NotificationMediator implements Mediator {
  constructor(
    public notifications: Notifications,
    public logger: Log,
    public handler: EventHandler,
  ) {}

  notify(_: string, event: string): void {
    switch (event) {
      case 'myEvent':
        this.notifications.send();
        this.logger.log('Отправлено');
        break;

      default:
        break;
    }
  }
}

const handler = new EventHandler();
const logger = new Log();
const notifications = new Notifications();

const mediator = new NotificationMediator(notifications, logger, handler);

handler.setMediator(mediator);

handler.myEvent();

export {};
