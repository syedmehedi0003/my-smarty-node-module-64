// server site 

const express = require('express');
const res = require('express/lib/response');
const app = express();
const cors = require('cors');
const { query } = require('express');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});



const users = [
    { id: 1, name: 'Sabana', email: 'saban@gmail.com', phone: '0183627565' },
    { id: 2, name: 'Pabana', email: 'paban@gmail.com', phone: '0183627565' },
    { id: 3, name: 'Jabana', email: 'jaban@gmail.com', phone: '0183627565' },
    { id: 4, name: 'Kabana', email: 'kaban@gmail.com', phone: '0183627565' },
    { id: 5, name: 'Labana', email: 'laban@gmail.com', phone: '0183627565' },
    { id: 6, name: 'Mabana', email: 'maban@gmail.com', phone: '0183627565' },
    { id: 7, name: 'Mabana', email: 'naban@gmail.com', phone: '0183627565' },
]

// app.get('/users', (req, res) => {
//     res.send(users);
// });

app.get('/users', (req, res) => {
    // console.log('Query', req, query);
    //filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }

    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id == id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('Request: ', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle');
})

app.listen(port, () => {
    console.log('Listen to port', port);
})