// 프로퍼티가 숫자인 경우 제외하고 대괄호 내에 들어가는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다.
// 네이밍 규칙을 어긴 경우 말하는 것이다.

var person = {
    'last-name' : 'taewoo',
    1 : 10,
};

//person.'last-name'; // syntax error
person.last-name; // 브라우저 환경에서 NaN, Node.js 에서는 ReferenceError (브라우저 에서는 name 이라는 전역 변수가 존재하기 때문)

person[last-name]; // reference Error (last is not defined)


person['last-name']; // 항상 이런식으로 해야함 (정답)

//-----

//person.1 ; // syntax error
//Sperson.'1'; // syntax error
person[1]; // 10 : person[1] -> person['1']로 알아서 형변환
person['1']; // 이게 제일 바람직 함 
