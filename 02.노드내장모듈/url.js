const url = require('url');

const { URL } = url;
const myURL = new URL('https://dsmhs.djsch.kr/main.do');        // new URL은 WHATWG의 url 구분 방식으로 출력
console.log('new URL():', myURL);       
console.log('url.format():', url.format(myURL));

console.log('--------------------------------');

const parseUrl = url.parse('https://dsmhs.djsch.kr/main.do');   // url.parse 노드의 url 구분 방식으로 출력
console.log('url.parse():', parseUrl);      
console.log('url.format():', url.format(parseUrl));