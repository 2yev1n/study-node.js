const fs = require('fs');

setInterval(() => {
    fs.unlink('./adc.js', (err) => {        // 존재하지 않는 파일을 지우고 있기 때문에 에러 발생
        if(err) {
            console.error(err);
        }
    });
}, 1000);