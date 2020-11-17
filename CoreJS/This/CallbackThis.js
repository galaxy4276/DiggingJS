/*
  콜백 함수는 기본적으로 this가 전역 객체를 참조하지만,
  제어권을 받은 함수에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우에는
  그 대상을 참조하게 된다.
*/

setTimeout(function () { console.log(this); }, 300);

[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this.x);
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a')
  .addEventListener('click', function (e) {
    console.log(this, e);
  });

// 위 코드 콜백함수 모두 결과가 window 전역 객체이다.
