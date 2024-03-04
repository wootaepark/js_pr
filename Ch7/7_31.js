// typeof 연산자

typeof ''; // string  -> 정확히는 "string" 과 같은 문자열 형식으로 반환 아래도 동일하다.
typeof 1; // number
typeof NaN; // number
typeof true; // boolean
typeof undefined; // undefined;
typeof Symbol(); // symbol
typeof null; // object
typeof []; // object
typeof {}; // object
typeof new Date; // object
typeof /test/gi; // object
typeof function() {} ;// function

// null 이 object 라고 나오는 것은 버전의 버그, 따라서 null 인지 확인 할때는 typeof 대신 === 사용하자

console.log(typeof null);
