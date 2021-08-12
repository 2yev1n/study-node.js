const crypto= require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

// 기본적인 스레드풀의 개수가 네 개이기 때문에 1~4와 5~8이 그룹으로 묶여져 있다
// 스레드풀이 네 개이므로 처음 네 작업이 동시에 실행되고, 그것들이 종료되면 다음 네 개의 작업이 실행
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('1:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('2:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('3:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('4:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('5:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('6:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('7:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('8:', Date.now() - start);
});