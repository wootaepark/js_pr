var string = 'Hello World';
var search = 'l';
var count = 0;

for (var i = 0; i<string.length; i++){
    if(string[i] !== search) continue;
    count ++;
}
console.log(count);

const regexp = new RegExp(search, 'g'); // 3
console.log(string.match(regexp).length); //3 
