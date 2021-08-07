const { dirname } = require('path');
const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);                  // 경로의 구분 윈도는 \, UNIX는 /
console.log('path.delimiter:', path.delimiter);      // 환경 변수의 구분자러, process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분도어 있음, 윈도는 (;), UNIX는 (:)
console.log('-------------------------------');
console.log('path.dirname()', path.dirname(string));                                    // 파일이 위치한 폴더 경로를 보여줌
console.log('path.extname():', path.extname(string));                                   // 파일의 확장자를 보여줌
console.log('path.basename():', path.basename(string));                                 // 파일의 이름(확장자 포함)을 표시, 
console.log('path.basename - extname:', path.basename(string, path.extname(string)));   // 파일의 이름만 표시하고 싶다면 basename의 두번째 인수로 파일의 확장자 넣기
console.log('-------------------------------');
console.log('path.parse()', path.parse(string));                                                                    // 파일 경로를 root, dir, base, ext, name으로 분리
console.log('path.format():', path.format({                                                                         // path.parse()한 객체를 파일 경로로 합치기
    dir: '/Users/yebin/Desktop/이예빈/node.js/study/노드내장모듈',
    name: 'path',
    ext: 'js',
}));
console.log('path.normalize():', path.normalize('/Users/yebin/Desktop/이예빈/node.js/study/노드내장모듈/path.js'));      // /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환
console.log('-------------------------------');
console.log('path.isAbsolute(/Users/', path.isAbsolute('/Users/'));     // 파일의 경로가 절대경로인지 상대경로인지 true나 false로 알림
console.log('-------------------------------');
console.log('path.relative():', path.relative('/Users/yebin/Desktop/이예빈/node.js/study/노드내장모듈/path.js', '/Users/yebin/Desktop/이예빈/node.js'));
// 경로를 두 개 넣으면 첫번째 경로에서 두번째 경로까지 가는 방법을 알림
console.log('path.join():', path.join(__dirname, '..','..','/Users','.','/yebin'));     // 여러 인수를 넣으면 하나의 경로로 합침, 상대경로인 ..(부모 디렉터리)과, .(현 위치)도 알아서 처리
console.log('path.resolve():', path.resolve(__dirname, '..','/Users','.','/yebin'));    // path.join()과 비슷하지만 절대 경로로 인식해서 앞 경로 무시
