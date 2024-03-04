var foo;
console.log(typeof foo);

foo = 3;
console.log(typeof(foo)); // 소괄호 ()를 써도 그만 안써도 그만

foo = 'Hello';
console.log(typeof foo);

foo = true;
console.log(typeof foo);

foo = null;
console.log(typeof foo);

foo = Symbol();
console.log(typeof foo);

foo = {};
console.log(typeof foo);

foo = []; 
console.log(typeof foo);

foo = function() {}
console.log(typeof foo);

foo = ()=>{}
console.log(typeof foo);