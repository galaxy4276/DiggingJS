/*
  await: 피연산자의 값을 반환해준다.
  Promise 객체이면 (피연산자) then 메서드를 호출해 얻은 값을
  반환해준다.

  async 라는 함수 수정자가 있는 함수 몸통에서만 사용이 가능하다.

  async 함수는 Promise 객체처럼 사용할 수 있다.
 */

const test1 = async () => {
  let value: any = await 1;
  console.log(value);

  value = await Promise.resolve(1);
  console.log(value);
}

async function test2() {
  let value = await 'hello';
  console.log(value);
  value = await Promise.resolve('hello');
  console.log(value);
}

// async 함수를 일반 함수처럼 사용한 예
// test1();
// test2();
// console.log('\n');

// async 함수를 Promise 객체처럼 사용한 예
test1()
  .then(() => test2());

// async 함수가 반환하는 값은 Promise 형태로 반환된다.
const asyncReturn = async () => {
  return [1, 2, 3];
}

asyncReturn()
  .then(value => console.log(value));