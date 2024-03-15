var person = {
    name : 'Park',
};

var copy = person;

console.log(copy === person); // 동일 객체 참조하므로 true,

copy.name = 'Kim';

person.address = 'Seoul';

console.log(person);
console.log(copy);

// 다른 변수로 하나의 객체에 접근 가능하다는 것은 좋지 않다.