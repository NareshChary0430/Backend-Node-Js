const express = require('express');
const app = express();
const connectDb = require('./config/db.js');


connectDb();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


module.exports = app;