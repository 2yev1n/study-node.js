console.log(this);      // 이 this는 module.exports(또는 exports 객체)를 가라킴.
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
    console.log('function', this === exports, this === global);     // 함수 선언문 내부의 this는 global 객체를 가리킴.
}


whatIsThis();       // 주석처리 한 내용들 땜에 같은 문장이어도 결과가 다르게 나타남.
