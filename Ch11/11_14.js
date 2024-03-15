const o = {x : {y : 1}};

const c1 = {...o};

console.log(c1 === o); // false
console.log(c1.x === o.x); // true
// 얕은 복사


const _ = require('lodash');
const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(c2.x === o.x);// false
// 깊은 복사

