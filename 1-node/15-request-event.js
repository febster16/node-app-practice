const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Welcome');
// })

// Using Event Emmiter API
const server = http.createServer();
// emits request event
// subscribe to it / listen to it / respond to id
server.on('request', (req, res) => {
    res.end('Welcome');
});

server.listen(5000);