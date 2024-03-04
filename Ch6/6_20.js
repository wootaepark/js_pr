// symbol 타입의 값 생성
var key = Symbol('key');
console.log(typeof key); // symbol
console.log(key);

// 객체 생성
var obj = {};

obj[key] = 'value';
console.log(obj);
console.log(obj[key]);

var numbers = 10;
var strings = '10';
console.log(typeof(numbers), typeof(strings));