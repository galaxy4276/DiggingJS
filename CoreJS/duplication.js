/*
  참조형은 복사에서 한단계를 더 거치게된다.
  a, b 변수가 있다면 b = a 후 b내용ㅇ
*/

// 객체의 가변성에 따른 문제점
// 원본 객체는 값이 변하지 않아야 한다.
// var user = {
//   name: 'Jaenam',
//   gender: 'male',
// };

// var changeName = function (user, newName) {
//   var newUser = user;
//   newUser.name = newName;
//   return newUser;
// }

// var user2 = changeName(user, 'Jung');

// if (user !== user2) {
//   console.log('유저 정보가 변경되었습니다.');
// }

// console.log(user.name, user2.name);
// console.log(user === user2);

/* 원본 객체 불변 유지하게 수정한 코드 */
var user = {
  name: 'Jaenam',
  gender: 'male',
};

var changeName = function (user, newName) {
  return {
    ...user,
    name: newName,
  };
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name);
console.log(user === user2);