const fs = require('fs');
// 비동기 처리 방식으로 시작과 끝을 제외하고 readFile은 비동기라서 백그라운드가 동시에 작업을 할 수 있고 메인 스레드는 다음 작업을 처리할 수 있다
console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝');