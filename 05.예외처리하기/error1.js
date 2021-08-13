setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마!');      // throw new Error() : 에러를 강제로 발생
    } catch(err) {
        console.error(err);
    }
}, 1000);