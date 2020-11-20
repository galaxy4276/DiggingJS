/*
  함수와 메서드의 차이
  함수: 그 자체로 독립적인 기능을 수행함.
  메서드: 자신을 호출한 대상 객체에 관한 동작을 수행함.
*/

/*
  메서드 내부에서의 this
  바로 함수명 앞의 객체가 this이다.
*/

var obj = {
  methodA: function () { console.log(this); },
  inner: {
    methodB: function () { console.log(this); }
  }
};

obj.methodA(); // obj 
obj['methodA'](); // obj 

obj.inner.methodB(); // inner
obj.inner['methodB'](); // inner
obj['inner'].methodB(); // inner
obj['inner']['methodB'](); // inner

// 함수를 함수로서 호출 시 this가 지정되지 않는다. -> 개발자가 코드에 직접 관여했기 때문이다. -> 전역 객체를 가리키게 된다.
