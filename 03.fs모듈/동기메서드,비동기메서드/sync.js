const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.txt');        // Sync 메서드 사용 시 이전 작업이 완료되어야 다음 작업을 실행함
console.log('1번', data.toString());
console.log('2번', data.toString());
console.log('3번', data.toString());
console.log('끝');