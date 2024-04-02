// 함수 선언문
function add (x,y){
    return x+y;
}

// 함수 참조
// console.dir 은 console.log 와는 달리 함수 객체의 프로퍼티까지 추력한다. (단 node 환경에서는 console.log 와 동일)
console.dir(add); // f add(x,y)
console.log(add); // [Function : add]

console.log(add(2,5));