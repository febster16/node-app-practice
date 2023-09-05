// GLOBALS - NO WINDOW !!!!

// __dirname   - path to current dir
// __filename  - file name
// require     - function to use module (file)
// module      - info about current module (file)
// process     - info about env where the program is being executed


// ==================


console.log(__dirname)

setTimeout(() => {
    console.log('hello world');
}, 2000)

setInterval(() => {
    console.log('hello world');
}, 1000)