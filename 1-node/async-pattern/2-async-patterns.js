const { readFile, writeFile } = require('fs');
// note: another alternative
// const { readFile, writeFile } = require('fs').promises;
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
// note: another alternative too instead of writing all manually

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, result) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(result);
//             }
//         });
//     })
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/second.txt', 'utf-8');
        await writeFilePromise(
            './content/result-mind-grenade.txt',
            `THIS IS RESULT: ${first} ${second}\n`,
            {
                flag: 'a'
            }
        )
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

console.log('another sync task executed first');

start();