console.log(score);

var score;
score = 80;

console.log(score);

// 위 log 와 아래 log 의 결과가 다르다. 
// 변수 선언은 런타임 이전에 먼저 실행되고 값의 할당은 런타임에 실행되므로 결과가 다르게 나타난다.

// score = 80 이 var score 보다 나중에 실행되므로 두 결과가 다른 것임 