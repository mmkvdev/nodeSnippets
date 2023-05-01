const sayHello = require('./local/index');
const add = require('./local/add');

// loaded function can be reused any number of times
const add1 = add(1,2);
const add2 = add(3,4);

console.log(sayHello('Naruto'));
console.log(add1);
console.log(add2);