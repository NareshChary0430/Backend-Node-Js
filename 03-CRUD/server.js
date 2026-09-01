const express = require('express');
const app = express();

let PORT = 3000;

// middleware
app.use(express.json());


let users = []

// create 

app.post('/create', (req, res) => {
    // let body = req.body;
    // // res.send('Hello from the create page');
    // res.send(body);
    users.push(req.body);
    res.send("User created successfully");
});

// Read 
app.get('/', (req, res) => {
    // res.send('Hello from the home page');
    res.send(users);
});


// update 

app.put('/update/:id', (req, res) => {
    let {id} = req.params;
    let body = req.body;

    let updatedUsers = users.map((val) => {
        return val.id === id ? {...val, ...body} : val;
    });

    res.send(updatedUsers);
});


// delete

app.delete('/delete/:id', (req, res) => {
    let {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send("User deleted successfully");
});




app.listen(PORT, () => {
    console.log('server is running on port 3000');
});