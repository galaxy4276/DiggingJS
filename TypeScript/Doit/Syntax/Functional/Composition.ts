export const f = <T>(x: T): string => `f(${x})`;
export const g = <T>(x: T): string => `g(${x})`;
export const h = <T>(x: T): string => `h(${x})`;

/*
  compose: 가변 인수 스타일로 함수들의 배열을 입력받는다.
  함수를 조합하는 함수?
 */

export const compose = <T, R>(...functions: readonly Function[]): Function =>
  (x: T): (T) => R => {
  const deepCopiedFunctions = [...functions];
  return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x);
}

const composeFGH = compose(h, g, f);
console.log(
  composeFGH('은기')
);

const inc = (x: number): number => x + 1;

const composed = compose(inc, inc, inc);
console.log(composed(1));
