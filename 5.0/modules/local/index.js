// loading a module
const addFn = require('./add'); 

console.log('Hello from local module index.js');

const sum_1 = addFn(1,2);
const sum_2 = addFn(3,4);

console.log({ sum_1, sum_2 });