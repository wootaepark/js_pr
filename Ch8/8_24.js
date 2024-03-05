var string = 'Hello World';
var search = 'l';
var count = 0;


for (var i =0; i<string.length ;i++){
    // 'l' 이면 카운트 증가
    if(string[i] === search) count++; // 8_23과 동일 역할
}

console.log(count);

const regexp = new RegExp(search, 'g'); // 3 , 'g'는 global 플래그를 나타낸다. 문자가 아니라
console.log(string.match(regexp).length); //3 