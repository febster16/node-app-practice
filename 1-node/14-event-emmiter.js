const EventEmitter = require('events');

const customEmmiter = new EventEmitter();

customEmmiter.on('response', (name, id) => {
    console.log(`data recieved user: ${name} with id: ${id}`);
});
customEmmiter.on('response', () => {
    console.log(`some other logic here`);
});

customEmmiter.emit('response', 'john', 34);
