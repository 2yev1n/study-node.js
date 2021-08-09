const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']);       // spawn(명령어, 옵션 배열)파이썬 코드를 실행하는 명령어를 넣으면 spawn을 통해 실행

process.stdout.on('data', function(data) {
    console.log(data.toString());
});     // 실행 결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
});     //  실행 에러