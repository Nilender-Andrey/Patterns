/* number */
const a = 1;
const b = 100_000;

/* string */
const s = 'Hello';

/* boolean */
const t = true;
const f = false;

/* object */

/* array */
// массив с одним типом
const skills_1: string[] = ['Dev', 'Test'];

// Массив заданной длинны и определенными типами
const skills_2: [number, string] = [1, 'Dev'];

const arr: [number, string, ...boolean[]] = [1, 'abc', true, false, true];

/* enums */
// компилируется в функцию
enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = 10,
  FAILED = 33,
}

// после компиляции в js везде где используется заменяется на константы
const enum Roles {
  ADMIN = 1,
  USER = 2,
}
