const express = require('express');
const app = express();
const port = 3000;
let items;
 
// MIddleware to parse JSON body 
app.use(express.json());

// A simple GET route 
app.get('/', (req, res) => {
    res.send("Welcome to the GhostLand!!!");
});

// A route to get a list of items 
app.get('/items', (req, res) => {
    const items = [
        { id: 1, name: 'Item One'},
        { id: 2, name: 'Item two'},
        { id: 3, name: 'Item three'}
    ];
    res.json(items);
});

// A route to ge t a single item by ID 
app.get('/items/:id', (req, res) => {
    const {id} = req.params;
    const item = { id, name: `Item ${id}`};
    res.json(items);
});

// A route to create a new item 
app.post('/items', (req, res) => {
    const newItem = req.body;
    res.status(201).json(newItem);
});

// start Server 
app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`);    
})

