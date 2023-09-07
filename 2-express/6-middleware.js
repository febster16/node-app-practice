const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');
const app = express();

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

app.use([morgan('tiny'), logger, authorize]);
// app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api', (req, res) => {
    console.log(req.user);
    res.send('API');
});

app.listen(5000, () => {
    console.log('Server is listening on 5000....');
});