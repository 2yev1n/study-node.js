const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);       // pipe를 통해 스트림을 연결하여 데이터를 복사해준다.