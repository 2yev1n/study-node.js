const dep1 = require('./dep(순환참조)/dep1');
const dep2 = require('./dep(순환참조)/dep2');

dep1();
dep2();