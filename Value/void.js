const log = console.log;
// void값은 undefined 내장 식별자로 값은 undefined지만 void 연산자로도 얻을수 있다.
// 어떤 표현식의 결과값이 없다는 걸 확실히 밝혀야할 때 긴요하다.
const a = 42;
log(void a, a); // undefined 42
// ex
function doSomething() {
  // APP.ready는 임의로 제공된 값
  if (!APP.ready) {
    return void setTimeout(doSomething, 1000);
  }

  const result;
  return result;
}

if (doSomething()) {
  // 다음작업 바로 실행
}

// setTimeout 이 무효가 되기 때문에 if 문이 긍정이지 않는다.


