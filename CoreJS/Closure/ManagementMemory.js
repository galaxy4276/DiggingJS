/*
  클로저의 메모리 소모가 필요 없어진 경우,
  식별자에 null 또는 undefined 할당
*/

var outer = (() => {
  let a = 1;
  const inner = () => ++a;
  return inner;
})();

console.log(outer());
console.log(outer());
outer = null; // gc got!