const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });     // createReadStream(읽을 파일 경로, 옵션 객체(highWaterMark는 버퍼의 크기를 바이트 단위로 정할 수 있음))읽기 스트림 생성
const data = [];

readStream.on('data', (chunk) => {      // 파일 읽기가 시작되면 data 이벤트 발생
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
});
readStream.on('end', () => {            // 파일을 다 읽으면 end 이벤트 발생
    console.log('end :', Buffer.concat(data).toString());       // concat()으로 합쳐서 다시 문자열로 만듦
});

readStream.on('error', (err) => {       // 파일을 읽는 도중 에러가 발생하묜 error 이벤트 호출 
    console.log('error :', err);
});