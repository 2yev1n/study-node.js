const EventEmitter = require('events');

const myEvent = new EventEmitter();     // myEvent라는 객체를 만듦 객체는 이벤트 관리르 위한 메서드
myEvent.addListener('event1', () => {       // addListener(이벤트명, 콜백) : on과 같은 기능
    console.log('이벤트 1');
});
myEvent.on('event2', () => {        // on(이벤트명, 콜백) : 이벤트 이름과 이벤트 발생 시의 콜백을 연결해줌(리스닝) (이벤트 하나에 이벤트 여러 개를 달아줄 수 있음)
    console.log('이벤트 2');
});
myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
});
myEvent.once('event3', () => {      // once(이벤트명, 콜백) : 호출을 여러 번 해도 한 번만 실행되는 이벤트 
    console.log('이벤트 3');
});

myEvent.emit('event1');     // emit(이벤트명) : 이벤트를 호출하는 메서드, 이벤트 이름을 인수로 넣으면 미리 등록해뒀던 이벤트 콜백이 실행
myEvent.emit('event2');

myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', () => {
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');       // removeAllListeners(이벤트명) : 이벤트에 연결된 모든 이벤트 리스너를 삭제 
myEvent.emit('event4');     // 위에서 먼저 제거했기 때문에 event4는 호출되지 않음

const listener = () => {
    console.log('이벤트 5');
};
const listener2 = () => {
    console.log('이벤트 5-2');
};
myEvent.on('event5', (listener,listener2));
myEvent.removeListener('event5', listener);     // removeListener(이벤트명, 리스너) : 이벤트에 연결된 리스너를 하나씩 제거 
myEvent.emit('event5');     // 위에서 listener을 제거했기 때문에 event5의 listener는 더 이상 실행되지 않음

console.log(myEvent.listenerCount('event2'));       // listenerCount(이벤트명) : 현재 리스너가 몇 개 연결되어 있는지 확인
console.log(myEvent.listenerCount('event5'));       //1

myEvent.off('event5', listener2);       // removeListener와 기능이 같음
myEvent.emit('event5');     // 리스너가 없기 때문에 아무것도 호출되지 않음
console.log(myEvent.listenerCount('event5'));       // 0