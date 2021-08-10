# study-node.js

노드 기능 알아보기 

### 01.노드 내장 객체

#### global :

브라우저의 window와 같은 전역 객체, 전역 객체이므로 모든 파일에서 접근 가능
global 객체의 속성에 값을 대입하여 파일 간에 데이터를 공유함



#### console : 

global 객체 안에 들어 있음

* console.log(내용) : 내용을 콘솔에 표시 
* console.time(레이블) : 같은 레이블을 가진 console.timeEnd(레이블) 사이의 시간을 측정
* console.error(에러 내용) : 에러를 콘솔에 표시
* console.table(배열) : 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현
* console.dir(객체, 옵션) : 객체를 콘솔에 표시할 때 사용, 첫 번째 인수로 표시할 객체를 넣고 두 번째 인수로 옵션 넣기 colors를 true로 하면 콘솔에 색이 추가, depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정
* console.trace(레이블) : 에러가 어디서 발생했는지 추적



#### 타이머 :

* setTimeout(콜백 함수 , 밀리초) : 주어진 밀리초 이후에 콜백 함수 실행
* setInterval(콜백 함수, 밀리초) : 주어진 밀리초마다 콜백 함수를 반복 실행
* setImmdiate(콜백 함수) : 콜백 함수를 즉시 실행

타이머 취소

* clearTimeout(아이디) :  setTimeout을 취소
* clearInterval(아이디) : setInterval을 취소
* clearImmediate(아이디) : setImmediate를 취소 



#### __filename, __dirname : 

* __filename : 현재 파일명
* __dirname : 현재 파일 경로



#### module, exports, require :

모듈을 만들 때 module.exports만 사용했는데, module 객체 말고 exports 객체로도 모듈 생성 가능

````javascript
export.a = '소문자입니다.';
export.A = '대문자입니다.';
````

* `module.exports === exports`
* require.cache : require한 파일의 모듈 객체, module.exports 했던 부분(exports), 로딩 여부(loaded), 부모(parent), 자식(children) 모듈 관계,
* require.main : 노드 실행 시 첫 모듈을 가리킴. node require로 실행하면 require.js가 require.main이 됨



#### process :

* process.version : 설치된 노드의 버전
* process.arch : 프로세서 아키텍처 정보 
* process.platform : 운영체제 플랫폼 정보
* process.pid : 현재 프로세스 아이디
* process.uptime() : 프로세스가 시작된 후 흐른 초 단위의 시간
* process.execPath :노드의 경로
* process.cwd() : 현재 프로세스가 실행되는 위치
* process.cpuUsage() : 현재 cpu 사용량



#### process.nextTick(콜백) :

이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선으로 처리하도록 만듦
Process.nextTick은 setImmediate나 setTimeout보다 먼저 실행
(Promise도 nextTick처럼 다른 콜백들보다 우선시 됨)

**process.nextTick과 promise를 마이크로태스크라고 부름**



#### process.exit(코드) : 

실행 중인 노드 프로세스를 종료. 서버 환경에서 이 함수를 사용하면 서버가 멈추므로 특수한 경우를 제외하고는 서버에서 잘 사용 X 



### 02. 노드 내장 모듈

#### os : 

노드에는 os모듈에 운영체제 정보가 담겨 잇어 정보를 가져올 수 있다.
운영체제별로 다른 서비스를 제공하고 싶을 때 유용

* os.arch() : process.arch와 동일
* os.platform() : process.platform과 동일
* os.type() : 운영체제의 종류
* os.uptime() : 운영체제 부팅 이후 흐른 시간(초)을 보여줌
* os.hostname() : 컴퓨터의 이름을 보여줌
* os.release() : 운영체제의 버전을 보여줌
* os.homedir() : 홈 디렉터리 경로를 보여줌
* os.tmpdir() : 임시 파일 저장 경로를 보여줌
* os.cpus() : 컴퓨터의 코어 정보를 보여줌
* os.freemem() : 사용 가능한 메모리(RAM)를 보여줌
* os.totalmem() : 전체 메모리 용량을 보여줌



#### path :

폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
운영체제별로 경로 구분자가 다르기 때문에 필요, 파일 경로에서 파일명이나 확장자만 따로 떼어주는 기능을 구현해두어 직접 구현하지 않고도 편리하게 사용 가능

* path.sep : 경로의 구분자 (윈도는 \, POSIX는 /)
* path.delimiter : 환경 변수의 구분자 (윈도는 ;, POSIX는 :)
* path.dirname(경로) : 파일이 위치한 폴더 경로를 보여줌
* path.extname(경로) : 파일의 확장자를 보여줌
* path.basename(경로, 확장자) : 파일의 이름(확장자 포함)을 표시, 파일의 이름만을 표시하고 싶을 때는 두 번째 인수로 파일의 확장자를 넣으면 됨
* path.parse(경로) : 파일 경로를 root, dir, base, ext, name으로 분리
* path.format(객체) : path.parse()한 객체를 파일 경로로 합침
* path.normalize(경로) : /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환
* path.isAbsolute(경로) : 파일의 경로가 절대경로인지 상대경로인지를 true나 false로 알림
* path.relative(기준경로, 비교경로) : 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알림
* path.join(경로, ···) : 여러 인수를 넣으면 하나의 경로로 합침, 상대경로인 ..(부모 디렉터리)과 .(현위치)도 알아서 처리
* path.resolve(경로, ···) : path.join()과 비슷하지만 절대 경로로 인식해서 앞 경로 무시



#### url :

인터넷 주소를 쉽게 조작하도록 도와주는 모듈, url 처리에는 2가지 방식이 있다.

* 주소의 각 부분별 명칭 가운데 주소를 기준으로 위쪽은 기존 노드의 url 구분 방법

![img](https://raw.githubusercontent.com/lifeisgouda/img/master/programming/nodejs/url.png)

* WHATWG의 url 구분 방식으로 출력
  * new URL 사용
* 노드의 url 구분 방식으로 출력
  * url.parse(주소) 사용
    * host 부분 없이  pathname 부분만 오는 주소인 경우엔 노드로 해야 함

* url.format(객체) : 분해되었던 url 객체를 다시 원래 상태로 조립 (WHATWG 방식 url과 기존 노드위 url을 모두 사용 가능)
* **searchParams**
  * search부분은 보통 주소를 통해 데이터를 전달할 때 사용
  * search는 물음표(?)로 시작하고, 그 뒤에 **키=값** 형식으로 데이터를 전달, 여러 키가 있을 경우에는 &로 구분
  * getAll(키) :  키에 해당하는 모든 값들을 가져옴
  * get(키) : 키에 해당하는 첫 번째 값만 가져옴
  * has(키) : 해당 키가 있는지 없는지 검사
  * keys() : searchParams의 모든 키를 반복기 객체로 가져옴
  * values() : searchParams의 모든 값을 반복기 객체로 가져옴
  * append(키, 값) : 해당 키를 추가, 같은 키의 값이 있다면 유지하고 하나 더 추가
  * set(키, 값) : append와 비슷하지만, 같은 키의 값들을 모두 지우고 새로 추가ㅣ
  * delete(키) : 해당 키를 제거
  * toString() : 조작한 searchParams 객체를 다시 문자열로 만듦, 이 문자열을 search에 대입하면 주소 객체에 반영



####  querystring

존 노드의 url을 사용할 때, search 부분을 사용하기 쉽게 객체로 만드는 모듈
간단하게 객체로 분해되고 문자열로 조립되므로 편리

* querystring.parse(쿼리) : url의 query 부분을 자바스크립트 객체로 분해
* querystring.stringify(객체) : 분해된 query 객체를 문자열로 다시 조립



#### crypto

다양한 방식의 암호화를 도와주는 모듈

* 단방향 암호화(해시 함수) : 
  복호화할 수 없는 암호화 방식(즉, 한 번 암호화하면 원래 문자열을 찾을 수 없다)
  * createHash(알고리즘) : 사용할 알고리즘 넣기 (md5, sha1, sha256, sha512) 
  * update(문자열) : 변환할 문자열 넣기
  * digest(인코딩) : 인코딩할 알고리즘 넣기 (base64, hex, latin1)
  * **pbkdf2(비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘)** : 
    기존 문자열에 salt라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용
    * salt를 잘 보관하고 있어야 비밀번호도 찾을 수 있음
* 양방향 암호화 : 암호화된 문자열을 복호화 가능, 키(열쇠) 사용
  * crypto.createCipheriv(알고리즘, 키, iv) : 암호화 알고리즘, 키, iv 넣기
  * crypto.update(문자열, 인코딩, 출력 인코딩) : 암호화할 대상, 대상의 인코딩, 출력 결과물의 인코딩을 넣기(보통 문자열은 utf8, 암호는 base64를 많이 사용)
  * crypto.final(출력 인코딩) : 출력 결과물의 인코딩을 넣으면 암호화가 완료
  * crypto.createDecipheriv(알고리즘, 키, iv) : 복호화할 때 사용, 암호화할 때 사용했던 알고리즘과 키, iv를 그대로 넣어야 함
  * decipher.update(문자열, 인코딩, 출력 인코딩) : 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩을 넣기 (createCipheriv의 update()에서 utf8, base64순으로 넣었다면 여기에서는 반대로 넣어야 함)
  * decipher.final(출력 인코딩) : 복호화 결과물의 인코딩 넣기



#### util :

각종 편의 기능을 모아둔 모듈 계속해서 API 추가되고 있으며, 가끔 사라지는 경우도 있음

* util.deprecate(함수, 경고 메시지) : 함수가 deprecated 처리되었음을 알림 첫 번째 인수로 넣은 함수를 사용했을 때 두 번째 인수에 있는 경고 메시지가 출력 
* util.promisify(바꿀 함수) : 콜백 패턴을 프로미스 패턴으로 바꿈
* util.callbackify(바꿀 함수) : 프로미스를 콜백으로 바꿈



#### worker_threads : 

노드에서 멀티 스레드 방식으로 작업이 가능함

* **isMainThread**를 통해 현재 코드가 메인(부모)스레드나 생성한 워커 스레드에서 실행되는지 구분됨
  * 메인 스레드에서는 **new Worker**를 통해 현재 파일(__filename)을 워커 스레드에서 실행시키고 있음(물론 현재 파일의 else 부분만 워커 스레드에서 실행)
* **worker.postMessage** : 부모가 워커를 생성한 후 워커에게 데이터를 보낼 수 있음
* **parentPort.on('message')** : 워커가 부모로부터 데이터를 받음
* **parentPort.postMessage** : 워커가 부모에게 데이터를 보낼 수 있음
* **worker.on('message')** : 부모가 워커에게 데이터를 받음
* **워커에서 on 메서드를 사용할 때는 parentPort.close()로 직접 워커를 종료해야 함**

