const express = require('express');

const connectDb = require('./config/db');

const notesRouter = require('./routes/notes.route');

const app = express();

connectDb();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the home page');
});

app.use('/notes', notesRouter);

module.exports = app;