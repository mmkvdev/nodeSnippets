// imports
const superHero = require("./code/superHero");

console.log({ superHeroName: superHero.getName() });
superHero.setName("Superman");
console.log({ superHeroName: superHero.getName() });

const newSuperHero = require("./code/superHero");
console.log({ newSuperHero: newSuperHero.getName() });
