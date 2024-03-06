// 아래 조건문은 모두 코드 블록을 실행 함 (if 조건이 true 이기 때문)
if (!false) console.log(false + ' is falsy value');
if(!undefined) console.log(undefined + 'is falsy value'); // 모두 문자화 되어서 출력된다.
if(!null) console.log(null + ' is falsy value');
if(!0) console.log(0 + ' is falsy value');
if(!NaN) console.log(NaN + ' is falsy value');
if(!'') console.log('' + ' is falsy value');

