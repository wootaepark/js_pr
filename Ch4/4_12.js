// 이 코드는 4_12 ~ 4_18 까지의 내용을 포함한다.

// 4_12 지정 가능한 변수의 경우
var person, $elem, _name, first_name, val1;

// 4_13 지정은 가능하지만 권장되지 않는 경우

var 이름, なまえ;

// 4_14 명명 규칙 위배되는 경우

/*
var first-name;
var 1st;
var this;
*/

// 4_15 아래의 경우 각 변수는 모드 다른 변수이다.

var firstname;
var firstName;
var FIRSTNAME;

// 4_16 변수의 의미를 알 수 있도록 아래 두번째 경우와 같이 명명하기

var x = 10;
var score = 100; // 의미를 잘 알 수 있다.

// 4_17 변수 선언에 별도의 주석이 필요하면 변수 존재 목적을 잘 드러내지 못하는 경우이다.

var d; // NG 잘 드러내지 못함
var elapsedTimeInDays; // OK

// 4_18 네이밍 컨벤션, 여러 명명 규칙이다.

var secondName; // 카멜 케이스
var second_name; // 스네이크 케이스
var SecondName; // 파스칼 케이스

var strSecondName; // type + identifier
var $elem = document.getElementById('myId'); // DOM 노드
var observable$ = fromEvent(document, 'click'); // RxJS 옵저버블


// 변수 : 카멜케이스, 클래스 : 파스칼 케이스를 보통 자바스크립트 에서 사용한다.

