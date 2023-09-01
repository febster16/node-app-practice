// destructure import 
const { readFileSync, writeFileSync } = require('fs');

console.log('starting task');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
// console.log(first, second)

// overwrite content
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}\n`,
    {
        flag: 'a'
    }
)
console.log('task completed');
console.log('starting next task');

