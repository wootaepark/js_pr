// ES6 확장 기능 (프로퍼티 축약)

var x = 1, y = 2;

var obj = {
    x : x,
    y : y,
};

// 위와 같이 키, 값이 같은 경우 ES6에서는 10_20에서와 같이 프로퍼티 키를 생략 가능 (키가 변수 이름으로 자동 생성) 

console.log(obj);