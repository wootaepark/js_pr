var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의값을 바탕으로 새로운 문자열을 생성한다.

var str = x + ''; // number + string = string
console.log(typeof str, str);

console.log(typeof x, x);