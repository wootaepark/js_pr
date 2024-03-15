var score = 80;

var copy = score;

console.log(score, copy);
console.log(score === copy);

score = 100; 
// 서로 다른 메모리 공간이기 때문에 당연히 copy는 변하지 않는다.
// 그리고 score 또한 80은 그대로 두고 100을 재할당 하면 다른 메모리 공간에 저장하고 접근한다.

console.log(score, copy);
console.log(score === copy);
