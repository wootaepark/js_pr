// 예약어를 프로퍼티로 사용은 되지만 권장 x

var foo = {
    var : '',
    function : '',

};
console.log(foo); // {var : "", function : ""}