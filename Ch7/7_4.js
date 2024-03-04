var x = 5, result; // 2개의 변수 한번에 할당

result = x++;
console.log(result, x); // 5, 6

result = ++x;
console.log(result, x); // 7, 7


result = x--;
console.log(result, x); // 7, 6

result = --x;
console.log(result, x); // 5, 5