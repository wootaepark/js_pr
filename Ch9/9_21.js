var done = false;
var message = '';

// 주어진 조건이 true일때
if(!done) message = '미완료';

message = done || '미완료';
console.log(message);