var http = require('http');
var fs = require('fs');

// http.createServer(
//     (req, res) => {
//         const text = fs.readFileSync('./content/big.txt', 'utf-8');
//         res.end(text);
//     }
// ).listen(5000);

http.createServer(
    (req, res) => {
        const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
        fileStream.on('open', () => {
            fileStream.pipe(res);
        })
        fileStream.on('error', (err) => {
            console.log(err);
        })
    }
).listen(5000);