var add1 = (function(){
    var a = 10;
    return function(x,y){
        return x+y+a;
    }
}());

console.log(add1(1,2)); //13

var add2 = (function(){
    var a = 10;
    return new Function('x', 'y', 'return x+y+a;');
}());

console.log(add2(1,2)); // a is not defined 

// 클로저 관련 내용 add1에서는 함수를 리턴하면서 클로저를 이용하여 내부 변수 'a' 에 접근이 가능하지만
// Function 객체를 이용한 경우 그렇지 않기 때문에 오류가 발생한다.