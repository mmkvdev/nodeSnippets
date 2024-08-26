const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// exports.add = add;
// exports.subtract = subtract;

// anti-pattern
exports = {
    add,
    subtract
}