// 삼항 연산자는 if.. else 문을 대체할 수 있다.

var done = true;
var message = '';

if(done) message = '완료';
else message = '미완료';
console.log(message);

message = done ? '완료' : '미완료';
console.log(message);

