# study-node.js

노드 기능 알아보기 

### 01.노드 내장 객체

#### global :

브라우저의 window와 같은 전역 객체, 전역 객체이므로 모든 파일에서 접근 가능
global 객체의 속성에 값을 대입하여 파일 간에 데이터를 공유함



#### console : 

global 객체 안에 들어 있음

* **console.log(내용)** : 내용을 콘솔에 표시 
* **console.time(레이블)** : 같은 레이블을 가진 console.timeEnd(레이블) 사이의 시간을 측정
* **console.error(에러 내용)** : 에러를 콘솔에 표시
* **console.table(배열)** : 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현
* **console.dir(객체, 옵션**) : 객체를 콘솔에 표시할 때 사용, 첫 번째 인수로 표시할 객체를 넣고 두 번째 인수로 옵션 넣기 colors를 true로 하면 콘솔에 색이 추가, depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정
* **console.trace(레이블)** : 에러가 어디서 발생했는지 추적



#### 타이머 :

* **setTimeout(콜백 함수 , 밀리초)** : 주어진 밀리초 이후에 콜백 함수 실행
* **setInterval(콜백 함수, 밀리초)** : 주어진 밀리초마다 콜백 함수를 반복 실행
* **setImmdiate(콜백 함수)** : 콜백 함수를 즉시 실행

타이머 취소

* **clearTimeout(아이디)** :  setTimeout을 취소
* **clearInterval(아이디)** : setInterval을 취소
* **clearImmediate(아이디)** : setImmediate를 취소 



#### __filename, __dirname : 

* **__filename** : 현재 파일명
* **__dirname** : 현재 파일 경로



#### module, exports, require :

모듈을 만들 때 module.exports만 사용했는데, module 객체 말고 exports 객체로도 모듈 생성 가능

````javascript
export.a = '소문자입니다.';
export.A = '대문자입니다.';
````

* `module.exports === exports`
* **require.cache** : require한 파일의 모듈 객체, module.exports 했던 부분(exports), 로딩 여부(loaded), 부모(parent), 자식(children) 모듈 관계,
* **require.main** : 노드 실행 시 첫 모듈을 가리킴. node require로 실행하면 require.js가 require.main이 됨



#### process :

* **process.version** : 설치된 노드의 버전
* **process.arch** : 프로세서 아키텍처 정보 
* **process.platform** : 운영체제 플랫폼 정보
* **process.pid** : 현재 프로세스 아이디
* **process.uptime()** : 프로세스가 시작된 후 흐른 초 단위의 시간
* **process.execPath** :노드의 경로
* **process.cwd()** : 현재 프로세스가 실행되는 위치
* **process.cpuUsage()** : 현재 cpu 사용량



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

* **os.arch()** : process.arch와 동일
* **os.platform()** : process.platform과 동일
* **os.type()** : 운영체제의 종류
* **os.uptime()** : 운영체제 부팅 이후 흐른 시간(초)을 보여줌
* **os.hostname()** : 컴퓨터의 이름을 보여줌
* **os.release()** : 운영체제의 버전을 보여줌
* **os.homedir()** : 홈 디렉터리 경로를 보여줌
* **os.tmpdir()** : 임시 파일 저장 경로를 보여줌
* **os.cpus()** : 컴퓨터의 코어 정보를 보여줌
* **os.freemem()** : 사용 가능한 메모리(RAM)를 보여줌
* **os.totalmem()** : 전체 메모리 용량을 보여줌



#### path :

폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
운영체제별로 경로 구분자가 다르기 때문에 필요, 파일 경로에서 파일명이나 확장자만 따로 떼어주는 기능을 구현해두어 직접 구현하지 않고도 편리하게 사용 가능

* **path.sep** : 경로의 구분자 (윈도는 \, POSIX는 /)
* **path.delimiter** : 환경 변수의 구분자 (윈도는 ;, POSIX는 :)
* **path.dirname(경로)** : 파일이 위치한 폴더 경로를 보여줌
* **path.extname(경로)** : 파일의 확장자를 보여줌
* **path.basename(경로, 확장자)** : 파일의 이름(확장자 포함)을 표시, 파일의 이름만을 표시하고 싶을 때는 두 번째 인수로 파일의 확장자를 넣으면 됨
* **path.parse(경로)** : 파일 경로를 root, dir, base, ext, name으로 분리
* **path.format(객체)** : path.parse()한 객체를 파일 경로로 합침
* **path.normalize(경로)** : /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환
* **path.isAbsolute(경로)** : 파일의 경로가 절대경로인지 상대경로인지를 true나 false로 알림
* **path.relative(기준경로, 비교경로)** : 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알림
* **path.join(경로, ···)** : 여러 인수를 넣으면 하나의 경로로 합침, 상대경로인 ..(부모 디렉터리)과 .(현위치)도 알아서 처리
* **path.resolve(경로, ···)** : path.join()과 비슷하지만 절대 경로로 인식해서 앞 경로 무시



#### url :

인터넷 주소를 쉽게 조작하도록 도와주는 모듈, url 처리에는 2가지 방식이 있다.

* 주소의 각 부분별 명칭 가운데 주소를 기준으로 위쪽은 기존 노드의 url 구분 방법

![img](https://raw.githubusercontent.com/lifeisgouda/img/master/programming/nodejs/url.png)

* WHATWG의 url 구분 방식으로 출력
  * **new URL** 사용
* 노드의 url 구분 방식으로 출력
  * **url.parse(주소)** 사용
    * host 부분 없이  pathname 부분만 오는 주소인 경우엔 노드로 해야 함

* **url.format(객체)** : 분해되었던 url 객체를 다시 원래 상태로 조립 (WHATWG 방식 url과 기존 노드위 url을 모두 사용 가능)
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

* **querystring.parse(쿼리)** : url의 query 부분을 자바스크립트 객체로 분해
* **querystring.stringify(객체)** : 분해된 query 객체를 문자열로 다시 조립



#### crypto

다양한 방식의 암호화를 도와주는 모듈

* 단방향 암호화(해시 함수) : 
  복호화할 수 없는 암호화 방식(즉, 한 번 암호화하면 원래 문자열을 찾을 수 없다)
  * **createHash(알고리즘)** : 사용할 알고리즘 넣기 (md5, sha1, sha256, sha512) 
  * **update(문자열)** : 변환할 문자열 넣기
  * **digest(인코딩)** : 인코딩할 알고리즘 넣기 (base64, hex, latin1)
  * **pbkdf2(비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘)** : 
    기존 문자열에 salt라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용
    * salt를 잘 보관하고 있어야 비밀번호도 찾을 수 있음
* 양방향 암호화 : 암호화된 문자열을 복호화 가능, 키(열쇠) 사용
  * **crypto.createCipheriv(알고리즘, 키, iv)** : 암호화 알고리즘, 키, iv 넣기
  * **crypto.update(문자열, 인코딩, 출력 인코딩)**** : 암호화할 대상, 대상의 인코딩, 출력 결과물의 인코딩을 넣기(보통 문자열은 utf8, 암호는 base64를 많이 사용)
  * **crypto.final(출력 인코딩)** : 출력 결과물의 인코딩을 넣으면 암호화가 완료
  * **crypto.createDecipheriv(알고리즘, 키, iv)** : 복호화할 때 사용, 암호화할 때 사용했던 알고리즘과 키, iv를 그대로 넣어야 함
  * **decipher.update(문자열, 인코딩, 출력 인코딩)** : 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩을 넣기 (createCipheriv의 update()에서 utf8, base64순으로 넣었다면 여기에서는 반대로 넣어야 함)
  * **decipher.final(출력 인코딩)** : 복호화 결과물의 인코딩 넣기



#### util :

각종 편의 기능을 모아둔 모듈 계속해서 API 추가되고 있으며, 가끔 사라지는 경우도 있음

* **util.deprecate(함수, 경고 메시지) :** 함수가 deprecated 처리되었음을 알림 첫 번째 인수로 넣은 함수를 사용했을 때 두 번째 인수에 있는 경고 메시지가 출력 
* **util.promisify(바꿀 함수)** : 콜백 패턴을 프로미스 패턴으로 바꿈
* **util.callbackify(바꿀 함수)** : 프로미스를 콜백으로 바꿈



#### worker_threads : 

노드에서 멀티 스레드 방식으로 작업이 가능함

* **isMainThread**를 통해 현재 코드가 메인(부모)스레드나 생성한 워커 스레드에서 실행되는지 구분됨
  * 메인 스레드에서는 **new Worker**를 통해 현재 파일(__filename)을 워커 스레드에서 실행시키고 있음(물론 현재 파일의 else 부분만 워커 스레드에서 실행)
* **worker.postMessage** : 부모가 워커를 생성한 후 워커에게 데이터를 보낼 수 있음
* **parentPort.on('message')** : 워커가 부모로부터 데이터를 받음
* **parentPort.postMessage** : 워커가 부모에게 데이터를 보낼 수 있음
* **worker.on('message')** : 부모가 워커에게 데이터를 받음
* **워커에서 on 메서드를 사용할 때는 parentPort.close()로 직접 워커를 종료해야 함**



#### child_process :

노드에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용

* **exec('dir(ls)')** : 현재 폴더의 파일 목록들이 표시됨

* **spawn(명령어, 옵션 배열)** : 타 프로그램  실행할 수 있음 (세 번째 인수로 shell : true를 제공하면 exec처럼 셸을 실행해서 명령어 수행)

  **이 둘의 차이는 exec은 셸을 실행에서 명령어를 수행하고, spawn은 새로운 프로세스를 띄우면서 명령어를 실행한다. **



#### 기타 모듈들 : 

* **assert** : 값을 비교하여 프로그램이 제대로 동작하는지 테스트하는 데 사용
* **dns** : 도메인 이름에 대한 IP 주소를 얻어내는 데 사용
* **net** : HTTP보다 로우 레벨인 TCP나 IPC 통신을 할 때 사용
* **string_decoder** : 버퍼 데이터를 문자열로 바꾸는 데 사용
* **tls** : TLS와 SSL에 관련된 작업을 할 때 사용
* **tty** : 터미널과 관련된 작업을 할 때 사용
* **dgram** : UDP와 관련된 작업을 할 때 사용
* **v8** : V8 엔진에 직접 접근할 때 사용
* **vm** : 가상 머신에 직접 접근할 때 사용





### 03. 파일 시스템 접근(fs) 

#### 파일 읽기 :

**fs**모듈은 파일 시스템에 접근하는 모듈 (파일 생성 · 삭제, 읽기 · 쓰기)

* **fs.readFile('읽을 파일의 경로', 콜백함수)** : 콜백함수의 매개변수로 에러 또는 데이터를 받음

  * console.log(data) : 메모리의 데이터인 Buffer라는 것이 출력됨
  * console.log(data.toString()) : 제대로 출력됨

* fs는 기본적으로 콜백 형식의 모듈이므로 실무에서 사용하기 불편하므로 프로미스 형식으로 바꿔주는 방법을 사용함

  ```javascript
  const fs = require('fs').promises;
  
  fs.readFile('./readme.txt')
      .then((data) => {
          console.log(data);
          console.log(data.toString());
      })
      .catch((err) => {
          console.error(err);
      });
  ```

* **fs.wirteFile('생성할 파일의 경로', '파일 안 내용')** : 같은 폴더 내에 파일이 파일이 생성됨



#### 동기 메서드와 비동기 메서드 :

노드는 대부분 메서드를 비동기 방식으로 처리하지만 몇몇 메서드는 동기 방식으로도 사용할 수 있다.
특히 fs 모듈이 그러한 메서드를 많이 갖고 있다

* **fs.readFile('읽을 파일의 경로', 콜백함수)** : 비동기 방식의 파일 읽기, 전체 파일을 모두 버퍼에 저장함

* **readFileSync('읽을 파일의 경로')** : 동기 방식의 파일 읽기

  **동기 방식은 백그라운드가 작업하는 동안 메인 스레드는 아무것도 하지 못하고 대기하고 있어야하고, Sync 메서드를 사용하면 백그라운드조차 동시에 처리할 수 없기 때문에 비효율적이다**

* 비동기 방식으로 하되 순서를 유지하고 싶을 때는 **이전 readFile의 콜백에 다음 readFile을 넣으면 된다** (콜백 지옥이 펼쳐지지만 Promise나 async/await로 해결)



#### 버퍼와 스트림 :

* 버퍼란 메모리에 저장된 데이터

  * ![146](https://thebook.io/img/080229/146.jpg)

  * **Buffer.from(문자열)** : 문자열을 버퍼로 바꿀 수 있음. 

  * **buffer.toString(버퍼)** : 버퍼를 다시 문자열로 바꿀 수 있음.

  * **concat(배열)** : 배열 안에 든 버퍼들을 하나로 합침

  * **alloc(바이트)** : 빈 버퍼를 생성, 바이트를 인수로 넣으면 해당 크기의 버퍼가 생성

  * 버퍼는 100MB인 파일이 있으면 읽을 때 메모리에 100MB의 버퍼를 만들어야 하기 때문에 메모리 소모가 크다 
    또한, 모든 내용을 버퍼에 다 쓴 후에야 다음 동작으로 넘어가서 조작을 연달아 할 때 매번 전체 용량을 버퍼로 처리해여 다음 단계로 넘어감

    

* 스트림이란 버퍼의 크기를 작게 만든 후 여러 번으로 나눠 보내는 방식

  * ![147](https://thebook.io/img/080229/147.jpg)

  * **fs.createReadStream(읽을 파일 경로, 옵션)** : 읽기 스트림을 만들고 부분으로 나눠 읽음 (highWaterMark라는 옵션이 버퍼의 크기(바이트 단위)를 정할 수 있음, 기본값은 64KB)

  * **readStream.on('data', 콜백 함수)** : 파일 읽기가 시작되면 data 이벤트 발생  

  * **readStream.on('error', 콜백 함수)** : 파일을 읽는 도중 에러가 발생하면 error 이벤트 호출

  * **readStream.on('end', 콜백 함수)** : 파일 읽기가 다 끝나면 end 이벤트 발생

  * **fs.createWriteStream(출력 파일명과 경로, 옵션)** : 쓰기 스트림을 만듦

  * **writeStream.on('finish', 콜백 함수)** : 파일 쓰기가 종료되면 콜백 함수가 호출

  * **writeStream.write(넣을 데이터)** : 출력한 파일에 데이터들이 들어감

  * **writeStream.end()** : 데이터를 다 썼다면 end 메서드로 종료를 알림 이떄 finish 이벤트가 발생함

  * 스트림은 큰 파일을 조각내어 작은 버퍼 단위로 옮기기 때문에 효과적으로 데이터를 전송할 수 있음 동영상과 같은 큰 파일들을 전송할 때 이러한 이유로 스트림을 사용함

    

* **piep**을 통해 createReadstream으로 파일을 읽고 그 스트림을 전달받아 createWriteStream으로 파일을 쓸 수도 있음 파일 복사와 비슷 

  * **readStream.pipe(writeStream)** : 미리 읽기 스트림과 쓰기 스트림을 만들어둔 후 두 개의 스트림 사이를 pipe 메서드로 연결하면 저절로 데이터가  넘어감

    

* **zlib** : 노드에서 제공하는 파일을 압축하는 모듈

  * **zlib.createGzip()** : readStream과 writeStream 중간에서 파이핑을 함 버퍼 데이터가 전달되다가 gzip 방식으로 압축을 거친 후 파일로 써짐
  * 압축된 파일이라 내용물을 읽기는 힘듦



#### 기타 fs 메서드 알아보기 : 

fs는 파일 시스템을 조작하는 다양한 메서드를 제공함 (**파일 생성 · 삭제**, 읽기 · 쓰기)
여기 있는 네 가지 메서드는 모두 비동기 메서드이므로 한 메서드의 콜백에서 다른 메서드를 호출함

* **fs.access(경로, 옵션, 콜백)** : 폴더나 파일에 접근할 수 있는지를 체크함 (F_OK : 파일 존재 여부, R_OK : 읽기 권한 여부, W_OK : 쓰기 권한 여부) 
  * ENOENT : 파일/폴더가 없을 때의 에러 코드
* **fs.mkdir(경로, 콜백)** : 폴더를 만드는 메서드 (이미 폴더가 있다면 에러가 발생하므로 먼저 access 메서드를 호출해서 확인하는 것이 중요!!)
* **fs.open(경로, 옵션, 콜백)** : 파일의 아이디(fd)를 가져오는 메서드, 만약 파일이 없다면 파일을 생성한 뒤 그 아이디를 가져옴 가져온 아이디를 사용해 fs.read/write로 읽거나 쓸 수 있음 두 번째 인수로 어떤 동작을 할 것인지를 설정할 수 있음 (쓰기 : w, 읽기 : r, 기존 파일에 추가하기 : a)
* **fs.rename(기존 경로, 새 경로, 콜백)** : 파일의 이름을 바꾸는 메서드 , 꼭 같은 폴더를 지정할 필요는 없으므로 잘라내기 같은 기능 가능 
* **fs.readdir(경로, 콜백)** : 배열 안에 내부 파일과 폴더명이 나오므로 폴더 안의 내용물 확인 가능 
* **fs.unlink(경로, 콜백)** : 파일을 지울 수 있음 (파일이 없다면 에러가 발생하므로 먼저 파일이 있는 확인해야 함)
* **fs.rmdir(경로, 콜백)** : 폴더를 지울 수 있음 (폴더 안에 파일들이 있다면 에러가 발생하므로 먼저 내부 파일을 모두 지우고 호출해야 함)
* **fs.copyFile(복사할 파일 경로 , 복사될 파일 경로, 복사 후 실행될 콜백 함수)** : 파일 복사
* **fs.watch(감시할 파일 경로, 콜백)** : 감시하는 파일의 내용물을 수정할 때는 change 이벤트가 발생하고, 파일명을 변경하거나 파일을 삭제하면 rename 이벤트가 발생 rename 이벤트가 발생한 후에는 더 이상 watch가 수행되지 않음 (change 이벤트가 두 번씩 발생하기도 하므로 사용할 때 주의가 필요)
