/*
  정보 은닉:
    모듈 간 결합도를 낮추고
    유연성을 높이고자 하는 중요한 요소 ( 캡슐화 )
*/

const outer = function () {
  let a = 1;
  const inner = function () {
    return ++a;
  }
  return inner;
};

var outer2 = outer();
console.log(outer2());
console.log(outer2());

/*
  클로저 내부에서는 return을 기준으로 public, private 멤버가 나뉜다.
  return 한 변수들은 public,
  return 하지 않은 변수들은 private 이다.
 */
const createCar = function () {
  let fuel = Math.ceil(Math.random() * 10 + 10); // 연료 (L)
  let power = Math.ceil(Math.random() * 3 + 2);
  let moved = 0;
  return {
    get moved () {
      return moved;
    },
    run: function () {
      const km = Math.ceil(Math.random() * 6);
      const wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log('이동 불가');
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(`${km}km 이동 ( 총: ${moved}km )`);
    },
  }; 
};

const car = createCar();

car.run();
car.run();
car.run();
car.run();
car.run();

// object.freeze -> 객체를 동결한다. ( 더 이상 변경할 수 없음 )
