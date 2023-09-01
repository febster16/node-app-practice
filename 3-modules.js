// Modules
// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

// =====================

// const names = require('./4-names');
// names.john or names.doe
// note: can use destructure
const { john, doe } = require('./4-names');
const sayHi = require('./5-utils');

const data = require('./6-alternative-export');

console.log(john);
console.log(doe);

sayHi('feb')
sayHi(john)
sayHi(doe)

console.log(data.items);
console.log(data.singlePerson.name);

// note: when we import a module, we actually execute it.
// the code in module will be wrapped in a function.

require('./7-mind-grenade');