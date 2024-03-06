// 불리언 타입이 아닌 값을 불리언 타입으로 변환하는 방법

Boolean('x'); // true
Boolean(''); // false
Boolean('false'); //true

Boolean(0); //false
Boolean(1); //true
Boolean(NaN); // false
Boolean(Infinity); // true

Boolean(null); //false
Boolean(undefined); // false

Boolean({}); // true
Boolean([]); // true // 빈 객체와 배열은 Truthy 값을 가진다.

// 부정 논리 연산자를 두번 사용 
!!'x'; // true
!!'';// false
!!'false'; // true

!!0; // false
!!1; //true
!!NaN; // false
!!Infinity; // true

!!null; // false

!!undefined; // false

!!{}; // true
!![]; // true