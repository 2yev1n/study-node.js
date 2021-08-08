const crypto = require('crypto');

const algorithm = 'aes-256-cbc';    // 'aes-256-cbc'알고리즘의 경우 키는 32바이트여야 하고, iv는 16바이트여야 함
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';
const cipher = crypto.createCipheriv(algorithm, key, iv);       //  crypto.createCipheriv(알고리즘, 키, iv) :  암호화 할 때 사용 
let result = cipher.update('암호화할 문장', 'utf8', 'base64');      // crypto.update(문자열, 인코딩, 출력 인코딩) : 암호화할 대상, 대상의 인코딩, 출력 결과물의 인코딩
result += cipher.final('base64');       // cipher.final(출력 인코딩) : 출력 결과물의 인코딩을 넣으면 암호화가 완료
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);       // crypto.createDecipheriv(알고리즘, 키, iv) : 복호화 할 떄 사용
let result2 = decipher.update(result, 'base64', 'utf8');        // decipher.update(문자열, 인코딩, 출력 인코딩) : 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩
result2 += decipher.final('utf8');      // decipher.final(출력 인코딩) : 복화할 결과물의 인코딩을 넣으면 복호화 완료
console.log('복호화:', result2);