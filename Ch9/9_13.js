function isFalsy(v){
    return !v;
}
// Falsy 이면 true, Truthy는 false 로 반환된다.

function isTruthy(v){
    return !!v;
}

// 아래는 모두 true를 반환한다.
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

// 아래는 모두 true를 반환한다.
isTruthy(true);
isTruthy('0');
isTruthy({});
isTruthy([]);