const _ = require('lodash');

function LodashExperimentation() {

    // generating a random number
    let num = _.random(0, 20);
    // return num;

    const lodashOnce = _.once(() => {
        console.log('Ill run only once');
    });

    lodashOnce();
    lodashOnce();
}


// console.log(LodashExperimentation());
LodashExperimentation();

/*(const main = () => {
    console.log(lodashOnce());
    console.log(lodashOnce());
}

main();*/