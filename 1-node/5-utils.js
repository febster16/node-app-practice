const sayHi = (name) => {
    console.log(`Hello, ${name}!`);
}

// note: in ES6 it's like using: `export default {funcName}`
module.exports = sayHi;