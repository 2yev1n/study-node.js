const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if (isMainThread) {     //  부모(메인)일 때
    // 현재 코드가 부모(메인)스레드에서 실행되는지, 아니면 우리가 생성한 워커 스레드에서 실행되는지 구분
    const worker = new Worker(__filename);      // new Worker를 통해 현재 파일(__filename)을 워커 스레드에서 실행시키고 있다
    worker.on('message', message => console.log('from worker', message));       // 워커에게 메시지를 받음
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');     // 부모가 워커에게 메시지를 보냄
} else {        //   워커일 때
    parentPort.on('message', (value) => {       // 워커는 부모로부터 'message'를 받고
        console.log('from parent', value);
        parentPort.postMessage('pong');     //  워커가 부모에게 메시지를 보냄
        parentPort.close();
    });
}