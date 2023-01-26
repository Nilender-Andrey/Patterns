interface IMiddleware {
  next(mid: IMiddleware): IMiddleware;
  handler(request: any): any;
}

abstract class AbstractMiddleware implements IMiddleware {
  private nextMiddleware!: IMiddleware;

  next(mid: IMiddleware): IMiddleware {
    this.nextMiddleware = mid;
    return mid;
  }
  handler(request: any) {
    if (this.nextMiddleware) {
      return this.nextMiddleware.handler(request);
    }
  }
}

class AuthMiddleware extends AbstractMiddleware {
  override handler(request: any) {
    console.log('AuthMiddleware');

    if (request.userId === 1) {
      return super.handler(request);
    }

    return { error: 'Вы не авторизованы' };
  }
}

class ValidateMiddleware extends AbstractMiddleware {
  override handler(request: any) {
    console.log('ValidateMiddleware');

    if (request.body) {
      return super.handler(request);
    }

    return { error: 'Нет body' };
  }
}

class Controller extends AbstractMiddleware {
  override handler(request: any) {
    console.log('Controller');

    return { success: request };
  }
}

/* Создаем элементы для цепочки вызовов */
const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();

/* Задаем последовательность вызовов */
auth.next(validate).next(controller);

/* Варианты с ошибкой */
console.log(auth.handler({ userId: 3 }));
console.log(auth.handler({ userId: 1 }));

console.log(auth.handler({ userId: 1, body: 'Ок' }));
