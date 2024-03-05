var string = 'Hello World';
var search = 'l';
var index;


console.log(string.length);
for (var i = 0; i < string.length; i++){
    if(string[i] === search){
        index = i;
        break;
    }
}
console.log(index);
console.log(string.indexOf(search));
console.log(String.prototype.indexOf.call(string, search)); // 모두 같은 역할