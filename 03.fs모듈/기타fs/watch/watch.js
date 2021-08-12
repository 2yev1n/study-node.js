const fs = require('fs');

fs.watch('./target.txt', (eventType, filename) => {
    console.log(eventType, filename);       // 내용물이 수정되면 change 이벤트가 발생, 파일명을 변경하거나 파일을 삭제하면 rename 이벤트가 발생
});     // (rename 이벤트가 발생한 후에는 더 이상 watch가 수행되지 않음)