const upperCaseModule = require('./upperCase.js');
const { a, b, c } = require('./upperCase');

console.log(upperCaseModule);
console.log(a, b, c);
console.log(upperCaseModule.upperCase('mmk'));
console.log(upperCaseModule.a,upperCaseModule.b,upperCaseModule.c);