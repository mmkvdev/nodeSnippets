// imports
const os = require('os');

os.cpus().forEach(element => {
    console.log({ element });
});