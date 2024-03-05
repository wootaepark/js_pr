var string = 'Hello World';
var search = 'l';
var count = 0;



// continue 를 사용하지 않는 경우

for (var i =0; i<string.length ;i++){
    // 'l' 이면 카운트 증가
    if(string[i] === search) {
        count ++;
    }
}
for (var i =0; i<string.length ;i++){
    // 'l' 이면 카운트 증가
    if(string[i] !== search)continue;
    count ++;
}

// 위 두 for 문은 동일한 메커니즘 이다.
// continue 를 사용하는 경우 더 짧을 수 있다.