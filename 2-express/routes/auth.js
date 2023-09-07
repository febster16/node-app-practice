const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    let { name } = req.body;
    name = name.trim();
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials');
});


module.exports = router;