const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);
//  버퍼 방식의 파일 복제 
const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);
console.log('buffer: ', process.memoryUsage().rss);
// 용량 많이 차지함