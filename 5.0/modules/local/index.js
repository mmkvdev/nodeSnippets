// loading a module -> imports / dependencies
const addFn = require('./add'); 

// load batman and superman modules
require('./batman');
require('./superman');

// code
console.log('Hello from local module index.js');

const sum_1 = addFn(1,2);
const sum_2 = addFn(3,4);

console.log({ sum_1, sum_2 });