const _ = require('lodash');


/*function onceExp() {
    console.log('Once Experimentation');
}*/

const onceExp = _.once(() => {
    console.log('Once Experimentation');
});

// var onceInit = _.once(onceExp);
onceExp();
onceExp();
onceExp();
onceExp();