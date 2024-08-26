// const add = (a,b) => a + b;

// module.exports = add;

// code
console.log('math module loaded');

// const add = (a, b) => a + b;

// const subtract = (a, b) => a - b;

/* when returning multiple entities from a module */
// module.exports = {
//     add,
//     subtract
// }

/** using module exports to directly return a function */
// module.exports = (a, b) => a + b; 

/** this pattern can also help us to export functions */
// module.exports.add = (a, b) => a + b;
// module.exports.subtract = (a, b) => a - b;

// using exports object from module wrapper

exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;