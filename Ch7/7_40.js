// 부수 효과 : 다른 코드에 영향을 주는 효과로서 값이 변화한다.

var x;

x = 1; // 부수 효과
console.log(x);

x++; // 부수 효과
console.log(x); //2 

var o = {a : 1}; 

delete o.a; // 부수 효과 (o 객체의 a 키를 가지는 값을 삭제하므로)
console.log(o); // {}