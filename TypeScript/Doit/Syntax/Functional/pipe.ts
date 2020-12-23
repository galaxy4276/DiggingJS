import {f, g, h} from './Composition';
/*
  pipe 는 compose와 매개변수를 해석하는 순서가 반대이다. ( reverse 없음 )
 */

export const pipe = <T, R>(...functions: readonly Function[]): Function => (x:T):
  (T) => R => {
    return functions.reduce((value, func) => func(value), x);
}

const piped = pipe(f, g, h);
console.log(
  piped('x')
);
