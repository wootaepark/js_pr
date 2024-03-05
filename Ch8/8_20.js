foo : {
    console.log(1);
    break foo;
    console.log(2); // 이 문은 실행되지 않는다.
}
console.log('Done');