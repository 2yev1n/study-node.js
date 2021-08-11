const fs = require('fs');       // fs 모듈을 불러온 뒤 읽을 파일의 경로를 저장

fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;;
    }
    console.log(data);
    console.log(data.toString());
});