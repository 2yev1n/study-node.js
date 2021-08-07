serImmediate(() => {
    console.log('immediate');
});
process.nextTick(() => {            // process.nextTick은 setImmediate나 setTimeout보다 먼저 실행
    console.log('nextTick');
});
setTimeout(() => {
    console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));       // resolve된 Promise도 nextTick처럼 다른 콜백들보다 우선함 이 둘을 마이크로태스크라고 구분지어 부른다.
