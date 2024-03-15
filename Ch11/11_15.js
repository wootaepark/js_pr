const v = 1;

// 깊은 복사 라고 부르기도 함 (원시 값을 할당한 변수를 다른 변수에 할당하는 것)

const c1 = v;
console.log(c1 === v);

const o = {x : 1}

const c2 = o;
console.log(c2 === o);

// 얕은 복사라고 부르기도 함 (객체를 할당한 변수를 다른 곳에 할당하는 경우)