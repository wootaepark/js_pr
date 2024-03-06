// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때 : 단축 평가가 유용한다.

var elem = null;
var value = elem.value; // TypeError

console.log(value); // 에러 해결 : 9_24 확인