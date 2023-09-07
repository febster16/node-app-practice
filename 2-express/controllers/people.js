let { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json(
        {
            success: true,
            data: people,
        }
    );
}

const createPerson = (req, res) => {
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
}

const createPersonPostman = (req, res) => {
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
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
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
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
};