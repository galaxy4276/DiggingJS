/*
  클로저의 활용 사례 들..
*/

// 콜백 함수 내부에서 외부 데이터를 사용하고자 할 때
const fruits = ['apple', 'banana', 'peach'];
const $ul = document.createElement('ul');


// (1) 반복을 줄이기위해 콜백함수를 분리한다.
/*
 (!) [object MouseEvent] 출력을 해결하기 위해, 
  즉 addEventListener가 콜백함수의 인자에 대한 제어권을 가진 상태이기 때문,
  (첫 인자에 이벤트 객체를 주입하기 때문이다).

  고차함수로 해결 하는 방안이 좋다.
*/
const alertFruit = (fruit) => {
  return () => console.log(`your choice is ${fruit}.`);
}

fruits.forEach((fruit) => {
  const $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', () => alertFruit(fruit)); // (1)
  $ul.appendChild($li);
});

document.body.appendChild($ul);
