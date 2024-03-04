// 지수 연산자의 결합 순서는 우항에서 좌항이다. 즉, 우결합 성을 가진다.

var value = 2 ** 3 ** 2; // 512 (64가 아니다)
2 ** (3 ** 2) ; // 512

Math.pow(2, Math.pow(3,2)); // 512 (가독성이 좋지는 않다. pow 의 경우)
console.log(value);