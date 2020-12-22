/*
  Array 클래스는 every 라는 인스턴스 메서드를 제공한다.
  -> 배열의 모든 아이템이 특정 조건을 만족한다면 true를 반환
 */

const isAllTrue = (values: boolean[]) => values.every((value => value === true)); // 모든 아이템이 조건에 맞아야 함.

console.log(
  isAllTrue([true, true, true]),
  isAllTrue([false, true, false]),
);

/*
  Promise 또한 every 와 같은 클래스 메서드를 제공한다.
  Promise.all 은 Promise 객체들을 배열 형태로 받아 모든 객체 대상으로
  resolve 된 값들의 배열로 만들어 준다.

  해소된 값들의 배열은 then 메서드를 호출해서 얻어야 한다.
  객체 중 reject 발생 시, 기다리지 않고 바로 Promise.reject 객체를 반환한다.
  catch 를 통해 얻어야 한다.

  Promise.race 는 거절 값이 발생해도 앞에 resolve 값이 온다면 반환해준다.
 */

const getAllResolvedResult = <T>(promises: Promise<T>[]) => Promise.all(promises);

getAllResolvedResult<any>([Promise.resolve(true), Promise.resolve('hello')])
  .then(result => console.log(result));

getAllResolvedResult<any>([Promise.reject(new Error('error')), Promise.resolve(1)])
  .then(result => console.log(result))
  .catch((err: Error) => console.log(`error: ${err.message}`));