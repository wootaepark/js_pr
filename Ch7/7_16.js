// NaN인지 확인하려면 아래와 같이 Number.isNaN 사용 (숫자의 경우)

Number.isNaN(NaN);// true
Number.isNaN(10); // false
Number.isNaN(1 + undefined) // true (연산이 불가능하므로);