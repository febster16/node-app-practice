const express = require('express');
const app = express()
let { people } = require('./data');

// static assets
app.use(express.static('./methods-public'));
// parse form data 
app.use(express.urlencoded(
    { extended: false }
));
// parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json(
        {
            success: true,
            data: people,
        }
    );
});

app.post('/api/people', (req, res) => {
    let { name } = req.body;
    name = name.trim();
    if (!name) {
        return res.status(400).send(
            {
                success: false, msg: 'please provide name value'
            }
        );
    }
    res.status(201).json({
        success: true,
        person: name
    });

});


app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).send(
            {
                success: false, msg: 'please provide name value'
            }
        );
    }

    res.status(201).json({
        success: true,
        data: [...people, name]
    });
});

app.put('/api/postman/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).send(
            {
                success: false, msg: `no person with id ${id}`
            }
        );
    }

    const newPerson = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person
    })
    res.status(200).json(
        {
            success: true,
            data: newPerson
        }
    );
});

app.delete('/api/postman/people/:id', (req, res) => {
    const { id } = req.params;

    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).send(
            {
                success: false, msg: `no person with id ${id}`
            }
        );
    }
    const newPerson = people.filter((person) => person.id !== Number(id));
    res.status(200).json(
        {
            success: true,
            data: newPerson
        }
    );
});

app.post('/login', (req, res) => {
    let { name } = req.body;
    name = name.trim();
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials');
});

app.listen(5000, () => {
    console.log('listening to server 5000....');
});