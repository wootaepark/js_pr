var person1 = {
    name : 'Lee',
};

var person2 = {
    name : 'Lee',
};

console.log(person1 === person2); // false
console.log(person1.name === person2.name); // true
 

// 두객체의 내용은 같지만 가리키는 주소가 다르므로 false
// 하지만 객체의 값 자체를 비교하는 것은, 값과 형식이 같으므로 true 이다.

