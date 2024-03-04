-0 === +0; // true

console.log(Object.is(-0, +0)) ; // false;

NaN === NaN; // false
console.log(Object.is(NaN, NaN)) ; // true;