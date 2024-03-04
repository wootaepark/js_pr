var x = '1';

// 문자열을 숫자로 타입 변환한다.

console.log(+x); // 1

// x 잧가 바뀌지는 않는다.
console.log(x); //"1"

x = true;
console.log(+x); // 1

console.log(x);// true

x=false;
console.log(+x); //0

console.log(x); //false

x = 'Hello';
console.log(+x); //NaN, 아무거나 숫자 타입으로 변환 할 수는 없다.

console.log(x); //"Hello"