var done = true;
var message = '';

// 주어진 조건이 true 일때
if(done) message = '완료';

// if 문은 단축 평가로 대체 가능하다.
// done 이 true 라면 message에 '완료'를 할당
message = done && '완료';
console.log(message);