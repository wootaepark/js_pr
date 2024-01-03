// 세미콜론과 세미콜론 자동 삽입 기능

function foo(){
    return
    {}

    // ASI (세미콜론 자동 삽입 기능) : return; {}; 로 인식
    // 개발자 생각 : return {}; 로 예측
}

console.log(foo()); // undefined 로 결과 추출

var bar = function () {}
(function() {})()

//ASI의 동작 결과 : var bar = function(){} (function() {})();
//개발자 생각 : var bar = function(){}; (function() {})();
//TypeError : (intermediate value)(...) is not a function 가 발생한다.