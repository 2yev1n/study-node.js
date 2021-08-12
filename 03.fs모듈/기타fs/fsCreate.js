const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)     // fs.access(경로, 옵션, 콜백) :폴더나 파일에 접근할 수 있는지를 체크 
// (F_OK : 파일 존재 여부, R_OK : 읽기 권한 여부, W_OK : 쓰기 권한 여부)
    .then(() => {
        return Promise.reject('이미 폴더 있음');
    })
    .catch((err) => {
        if (err.code === 'ENOENT') {        // ENOENT : 파일이나 폴더가 없을 때의 에러 코드
            console.log('폴더 없음');
            return fs.mkdir('./folder');        // fs.mkdir(경로, 콜백) : 폴더를 만드는 메서드(이미 폴더가 있다면 에러가 발생하므로 먼저 access메서드를 호출해서 확인해야 함)
        }
        return Promise.reject(err);
    })
    .then(() => {
        console.log('폴더 만들기 성공');
        return fs.open('./folder/file.js', 'w');        // fs.open(경로, 옵션, 콜백) : 파일의 아이디(fd 변수)를 가져오는 메서드, 파일이 없다면 파일을 생성한 뒤 그 아이디를 가져옴
    })      // 두 번째 인수로 어떤 동작을 할 것인지를 설정할 수 있음 (쓰기 : w, 읽기 : r, 기존 파일에 추가하기 : a)
    .then((fd) => {
        console.log('빈 파일 만들기 성공', fd);
        fs.rename('./folder/file.js', './folder/newfile.js');       // fs.rename(기존 파일 위치, 새 파일 위치, 콜백) : 파일의 이름을 바꾸는 메서드
    })
    .then(() => {
        console.log('이름 바꾸기 성공');
    })
    .catch((err) => {
        console.error(err);
    });