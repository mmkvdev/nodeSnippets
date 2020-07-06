// Global context in node environment -> global

// console.log(global);

// setTimeout 
// global.
setTimeout(() => { // runs once after n seconds
    console.log('I was here');
    clearInterval(interval); // clear the setInterval cycle based on n intervals specified.
}, 3000);

const interval = setInterval(() => { // runs for every n seconds
    console.log('In the setInterval method');
}, 1000);