// 기명 함수 표현식
var add = function foo(x,y){
    return x+y;
}

console.log(add(2,5));

console.log(foo(2,5));// foo is not defined 