const log = console.log;
// typeof 가 object 인 값은 [[Class]] 라는 내부 프로퍼티가 존재한다.
// 직접 접근할 수 없고 Object.prototype.toString 메서드 값을 넣어 호출해서 엿볼 수 있다.
log(Object.prototype.toString.call([1, 2, 3]));
log(Object.prototype.toString.call( /regex-literal/i ));
