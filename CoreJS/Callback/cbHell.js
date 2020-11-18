/*
  callback 지옥
*/

// setTimeout(function (name) {
//   var coffeeList = name;
//   console.log(coffeeList);

//   setTimeout(function (name) {
//     coffeeList += ', ' + name;
//     console.log(coffeeList);

//     setTimeout(function (name) {
//       coffeeList += ', ' + name;
//       console.log(coffeeList);

//       setTimeout(function (name) {
//         coffeeList += ', ' + name;
//         console.log(coffeeList);
//       }, 500, '카페라떼');
//     }, 500, '카페모카');
//   }, 500, '아메리카노');
// }, 500, '에스프레소');

// console.log('==========================================');
/*
  비동기의 동기적 작업
  Promise (1)
*/
// new Promise(function (resolve) {
//   setTimeout(function () {
//     var name = '에스프레소';
//     console.log(name);
//     resolve(name);
//   }, 500);
// }).then(function (prevName) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       var name = prevName + ', 아메리카노';
//       console.log(name);
//       resolve(name);
//     }, 500);
//   });
// }).then(function (prevName) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       var name = prevName + ', 카페모카';
//       console.log(name);
//       resolve(name);
//     }, 500);
//   });
// }).then(function (prevName) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       var name = prevName + ', 카페라떼';
//       console.log(name);
//       resolve(name);
//     }, 500);
//   });
// });

/*
  함수화 ( 클로저 ) Promise (2)
// */
// var addCoffee = function (name) {
//   return function (prevName) {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         var newName = prevName ? (prevName + ', ' + name) : name;
//         console.log(newName);
//         resolve(newName);
//       }, 500);
//     });
//   };
// };

// addCoffee('에스프레소')()
//   .then(addCoffee('아메리카노'))
//   .then(addCoffee('카페모카'))
//   .then(addCoffee('카페라떼'));

var addCoffee = function (prevName, name) {
  setTimeout(function () {
    coffeeMaker.next(prevName ? prevName + ', ' + name : name);
  }, 500);
};

var coffeeGenerator = function* () {
  var espresso = yield addCoffee('', '에스프레소');
  console.log(espresso);
  var americano = yield addCoffee(espresso, '아메리카노');
  console.log(americano);
  var mocha = yield addCoffee(americano, '카페모카');
  console.log(mocha);
  var latte = yield addCoffee(mocha, '카페라떼');
  console.log(latte);
};

var coffeeMaker = coffeeGenerator();
coffeeMaker.next();
