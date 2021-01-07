class Bird {
  fly() {
    console.log(`I'm flying.`);
  }
}

class Fish {
  swim() {
    console.log(`I'm swimming.`);
  }
}

// 타입 가드 함수
const isFlyable = (o: Bird | Fish): o is Bird => {
  console.log(o instanceof Bird);
  return o instanceof Bird;
}

const isSwimable = (o: Bird | Fish): o is Fish => {
  console.log(o instanceof Fish);
  return o instanceof Fish;
}

const flyOrSwim = (o: Bird | Fish): void => {
  if (isFlyable(o))
      o.fly();
  if (isSwimable(o))
      o.swim();
}

[new Bird, new Fish]
  .forEach(flyOrSwim);


