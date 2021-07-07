import { EventEmitter } from 'events';

function ticker(ms, cb) {
  let time = 0;
  let count = 0;
  const emitter = new EventEmitter();
  const interval = setInterval(() => {
    if (time > ms) {
      clearInterval(interval);
      return cb(count);
    }
    emitter.emit('tick');
    time += 500;
    count++;
  }, 500);
  return emitter;
}

ticker(3000, (count) => {
  console.log(`총 ${count} 번 emit 이벤트가 호출되었습니다.`);
})
  .on('tick', () => console.log('emit 호출 됨'));
