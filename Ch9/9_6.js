0 + ''; // -> "0"
-0 + ''; //-> "0"
1 + ''; // -> "1"
-1 + ''; // -> "-1"
NaN + ''; // -> "NaN"
Infinity + ''; // -> "Infinity"
-Infinity + ''; // -> "-Infinity"

true + '';
false + '';

null + '';
undefined + '';
// => 모두 문자화 된다.

(Symbol())+''; // TypeError : Cannot convert a Symbol value to a string

({}) + '' // "[object Object]"
Math + '' // "[object Math]"
[] + ''//""
[10,20] + ''; // "10, 20"
(function(){}) //"function(){}"
Array + ''; // "function Array(){[natibe code]}"
