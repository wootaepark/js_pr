if('') console.log('1');
if(true) console.log('2');
if(0) console.log('3');
if('str') console.log('4');
if(null) console.log('5');

// 2, 4 가 결과로서 나온다.

// true 로 평가 되는 값 (Truthy 값)
// false 로 평가 되는 값 (Falsy 값) : false, undefined, null ,0, -0, NaN, '' (빈 문자열)