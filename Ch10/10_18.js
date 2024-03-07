// 프로퍼티 삭제
// 존재 하지 않는 프로퍼티 삭제 시도시 아무런 에러 없이 무시

var person = {
    name : 'Park',
};

person.age = 20;

console.log('삭제 전 : ', person);

delete person.age;
delete person.address; // 없는 프로퍼티 삭제시도 (무시)

console.log('삭제 후 : ',person);