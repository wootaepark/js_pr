// ES5

var prefix = 'prop';
var i = 0;

var obj = {};
obj[prefix + '-' + ++i] = i; // 프로퍼티 키로 사용할 표현식을 []로 묶어야 한다. (계산된 프로퍼티 이름이라고 한다.)
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj);