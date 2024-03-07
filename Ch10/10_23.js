// ES5

var obj = {
    name : 'Park',
    sayHi : function(){
        console.log('Hi!', this.name);
    }
};
obj.sayHi();
console.log(obj);

// 위와 같이 프로퍼티 값으로 함수 할당 가능 , ES6 에서는 function 키워드 안서도 된다.
