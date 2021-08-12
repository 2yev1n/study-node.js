const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);
//  스트림 방식의 파일 복제 
const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');

readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log('stream: ', process.memoryUsage().rss);
});
// 메모리를 많이 차지 X, 효과적으로 데이터 전송할 수 있음