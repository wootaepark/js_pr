var score = 80;

var copy = score; // 값은 같으나 서로 다른 메모리 공간에 저장된다.

console.log(score, copy);
console.log(score === copy);
