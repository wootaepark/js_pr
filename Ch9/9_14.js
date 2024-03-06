// 문자열 타입으로 변환 (문자열 타입이 아닌 것을 문자열 타입으로 변환)

// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
String(1);
String(NaN); // "NaN";
String(Infinity); //"Infinity"

String(true);
String(false); //"false"

// 2. Object.prototype.toString 메서드 사용하기
// 숫자 타입 -> 문자열 타입
(1).toString(); // '1'
(NaN).toString();
(Infinity).toString();
(true).toString();
(false).toString();


// 3. 문자열 연결 연산자를 이용하는 방법
1+'';
NaN+'';
Infinity+'';
true+'';
false+'';