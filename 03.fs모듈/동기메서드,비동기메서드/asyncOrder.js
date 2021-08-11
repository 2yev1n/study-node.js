const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme2.txt', (err, data) => {
        if(err) {
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./readme2.txt', (err, data) => {
            if(err) {
                throw err;
            }
            console.log('3번', data.toString());
            console.log('끝');
        });     // 비동기 방식으로 순서를 유지하려면 이전 readFile의 콜벡에 다음 readFile을 넣으면 된다 (콜백 지옥이 펼쳐지기 함)
    });
});