const add = (a, b) => {
    return a + b;
}

const sum = add(1,2);
console.log(`Sum of two numbers is: ${sum}`);

// exporting a module
module.exports = add;