const { 
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if (isMainThread) {     // 부모일 떄
    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData: { start: 1 },       // 01.workerData 속성으로 원하는 데이터를 보낼 수 있음
    }));
    threads.add(new Worker(__filename, {
        workerData: { start: 2 },
    }));
    for (let worker of threads) {
        worker.on('message', message => console.log('form worker', message));       // 04. 출력
        worker.on('exit', () => {       // 05. 돌려주는 순간 워커가 종료되어 worker.on('exit')이 실행,
            threads.delete(worker);
            console.log(threads.size);      // 남은 threads의 개수를 볼 수 있음.
            if(threads.size === 0) {        // 워커 두 개가 모두 종료되면 job done이 로깅됨
                console.log('job done');
            }
        });
    }
} else {        // 워커일 때
    const data = workerData;        // 02.workerDatafh 부모로부터 데이터를 받음
    parentPort.postMessage(data.start + 100);       // 03.각각 부모로부터 숫자를 받아서 100을 더해서 돌려줌
}