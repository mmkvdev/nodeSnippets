const fighter = ['Ohma Tokita', 'Rian', 'Adam'];
const ages = [6, 7, 6];
// console.log(fighter);

// CommonJS Format -> node js module specification
//exports.a = fighter; /* => module.exports = 'Ohma' */

// JS Format for exporting values
module.exports = {
    fighter,
    ages
};