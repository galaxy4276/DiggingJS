import {squaredMap} from "./map";
import {pipe} from "./pipe";

export const reduce = (f, initValue) => a => a.reduce(f, initValue);
// export const reduce = <T>(f: sum: T, value: T) => T, initValue: T) => (a: T[]): T => a.reduce(f, initValue);

const sum = (result, value) => result + value;

const sumArray = reduce(sum, 0);

const pitagoras = pipe(
  squaredMap,
  sumArray,
  Math.sqrt
);

console.log(
  pitagoras([3, 4])
);
