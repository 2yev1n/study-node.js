const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));        // createHash : 사용할 알고리즘 넣기 (md5, sha1, sha256, sha512) 
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));              // update : 변환할 문자열 넣기
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));    // digest : 인코딩할 알고리즘 넣기 (base64, hex, latin1)