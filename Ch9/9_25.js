function getStringLength(str){
    str = str || '';
    return str.length;
}

console.log(getStringLength());
console.log(getStringLength('hi'));

// 위 아래 함수는 같은 역할을 한다.

function getStringLength2(str = ''){
    return str.length;
}

console.log(getStringLength2());
console.log(getStringLength2('hi'));