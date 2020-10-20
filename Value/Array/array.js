var a = [];
a[0] = 1;
a[1] = "2";
a[2] = [ 3 ];

console.log(a);

delete a[1];

console.log(a);
console.log(a.length);
// delete 연산자를 적용해도 length가 바뀌지 않는다는 점을 주의한다!

a["foobar"] = 2;
console.log(a.length); 
// 배열 자체도 하나의 객체이기 때문에 키/프로퍼티값을 부여할 수 있지만 length는 증가하지 않는다.

a["13"] = 42;
console.log(a.length);
// 문자열 키값이 10진수 숫자면 숫자 키를 사용한 것 같은 결과가 초래된다는 점은 정말 주의해야한다.
