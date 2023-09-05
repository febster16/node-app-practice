// destructure import 
const { readFile, writeFile } = require('fs');

console.log('starting task');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}\n`,
            {
                flag: 'a'
            },
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                // console.log(result);
                console.log('task completed');
            }
        );

    });

});// destructure import 
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}\n`,
            {
                flag: 'a'
            },
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log(result);
            }
        );

    });

});
console.log('starting next task');