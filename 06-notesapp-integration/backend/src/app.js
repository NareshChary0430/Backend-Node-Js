const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');

const notesRouter = require('./routes/notes.route');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}))

connectDb();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the home page');
});

app.use('/notes', notesRouter);

module.exports = app;