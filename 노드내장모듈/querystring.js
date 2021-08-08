const url = require('url');     // url 모듈
const querystring = require('querystring');     // querystring 모듈

const parsedUrl = url.parse('https://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);       // querystring 모듈 사용법 (간단하게 객체로 분해되고 문자열로 조립되므로 편리)

console.log('querystring.parse():', query);             // url의 query 부분을 자바스크립트 객체로 분해
console.log('querystring.stringify():', querystring.stringify(query));      // 분해된 query 객체를 문자열로 다시 조립