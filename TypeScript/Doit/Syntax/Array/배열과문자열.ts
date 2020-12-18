// 문자열을 배열로 만들 때 String 클래스의 split 을 이용한다.
const split = (str: string, delim: string = ''): string[] => str.split(delim);

console.log(
  split('hello'),
  split('h_e_l_l_o', '_'),
);

// 배열로 String 타입으로 변환하려면 Array 클래스의 join 메서드를 이용한다.
const join = (strArray: string[], delim: string = ''): string => strArray.join(delim);

console.log(
  join(['h', 'e', 'l', 'l', 'o']),
  join(['h', 'e', 'l', 'l', 'o'], '바보')
);

