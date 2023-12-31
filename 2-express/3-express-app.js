const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });
// - instead of this, we can add to static assets, or
// - SSR - Server Side Rendering

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000....');
});