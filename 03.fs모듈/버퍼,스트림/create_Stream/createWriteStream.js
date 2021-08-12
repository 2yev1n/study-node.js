const fs = require('fs');

const writeStream = fs.createWriteStream('./wirteme2.txt');     //  createWriteStream(출력 파일명, 옵션) : 쓰기 스트림 생성
writeStream.on('finish', () => {        // 파일 쓰기가 종료되면 콜백 함수 호출
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다. \n');    // write 메서드로 넣을 데이터를 씀
writeStream.write('한 번 더 씁니다.');      
writeStream.end();      //  데이터를 다 썼으면 end 메서드로 종료를 알림 