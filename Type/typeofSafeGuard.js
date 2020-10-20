import { product, sum } from './utility';

console.log(product(1, 2)); // 2
console.log(sum(1, 2)); // 3

// if (DEBUG) { // 에러가 난다!
//   console.log('디버깅을 시작합니다.');
// }

if (typeof DEBUG !== "undefined") { // typeof의 safeguard
  console.log('디버깅을 시작합니다'); 
}