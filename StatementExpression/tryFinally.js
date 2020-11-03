const log = console.log;

function foo() {
  try {
    return 42;
  } finally {
    console.log('hello');
  }

  console.log('미지의 영역');
}

console.log(foo());
// finally 절에서 예외가 던져지면 이전 실행결과는 모두 무시된다.
// finally 절은 try 절의 return을 덮어쓰는 특징이 존재한다.

// JS에러는 조기에러 ( 컴파일러가 던진 잡을 수 없는 에러) 와 런타임 에러(try catch 로 잡을 수 있는 에러) 로 나뉜다.
