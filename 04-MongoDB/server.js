const express = require('express');
const app = express();


let PORT = 3000;


// middleware
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello from the home page');
});


app.listen(PORT, () => {
    console.log('server is running on port 3000');
});