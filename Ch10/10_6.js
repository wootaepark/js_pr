// 동적으로 프로퍼티 키를 동적으로 생성 가능
var obj = {};
var key = 'hello';


//ES5 : 프로퍼티 키 동적 생성
obj[key] = 'world';
// 이런식으로 할당도 가능 
//obj[key] = key;


//ES6 : 계산된 프로퍼티 이름
// var obj = {[key] : 'world'};

console.log(obj);