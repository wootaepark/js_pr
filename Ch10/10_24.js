// ES6

var obj = {
    name : 'Park',
    sayHi(){
        console.log('Hi!', this.name);
    }
};
obj.sayHi();
console.log(obj.sayHi());
//console.log(console.log('hello')); // 위 코드가 이런 느낌이라 undefined 가 실행된다.


// 위와 같이 프로퍼티 값으로 함수 할당 가능 , ES6 에서는 function 키워드 안서도 된다.
