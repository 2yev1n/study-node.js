process.on('uncaughtException', (err) => {      // uncauchtException : 연결되어 있으면 프로세스가 멈추지 않음(다음 동작이 제대로 동작하는지 보증 X)
    console.error('예기치 못한 에러', err);
});

setInterval(() => {
    throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다');
}, 2000);