// 동등 비교. 결과 예측 힘듬

'0' == ''; // false
0 == ''; // true
0 == '0'; // true
false == 'false'; // false
false == '0'; // true
false == null; // false
false == undefined; // false



// 위와 같은 패턴은 안티 패턴으로 지양하는 패턴이다.