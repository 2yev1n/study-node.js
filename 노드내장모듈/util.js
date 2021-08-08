const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {        // util.deprecate: 첫번째 인수로 넣은 함수를 사용했을 떄 경고 메시지 출력
    console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');     // 두번째 인수로 경고 메시지 내용 넣기
dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);      // util.promisify: 콜백 패턴을 프로미스 패턴으로 바꿈
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error(error);
    });