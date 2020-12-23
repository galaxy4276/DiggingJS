/*
  포인트가 없는 함수 map
 */

import {pipe} from "./pipe";

export const map = f => a => a.map(f); // 타입 추론의 형태
// export const map = <T, R>(f: (T) => R) => (a: T[]): R[] => a.map(f);

const square = value => value * value;

export const squaredMap = map(square);

const fourSquare = pipe(
  squaredMap,
  squaredMap
);

console.log(
  fourSquare([3, 4])
);
