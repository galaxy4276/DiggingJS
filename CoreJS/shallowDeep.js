/* 
  중첩된 객체에 대한 얕은 복사와 깊은 복사 예제
 */

 function copyObject(targetObj) {
    let result = {};
    for (const props in targetObj) 
      result[props] = targetObj[props];
    
    return result;
 };


let user = {
  name: 'Jaenam',
  urls: {
    portfolio: 'hello',
    blog: 'blog',
    facebook: 'facebook',
  }
};

let user2 = copyObject(user);
user2.name = 'Jung';
console.log(user.name === user2.name);
// 다른 값은 true 낸다.
