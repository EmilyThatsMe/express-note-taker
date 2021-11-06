// Dependencies
// ==========================================
const express = require('express');
const app = express();
const { notes } = require('./db/db.json');
const path = require('path');
const exp = require('constants');
const PORT = 3001;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =========================================

// get notes
// app.get('/api/notes', (req, res) => {
//     let results = notes;
//     console.log(req.query)
//     res.json(results);
// });

// Route that returns index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Route that returns notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// Listener
// ==========================================
app.listen(PORT, () => {
    console.log(`API server now on ${PORT}`)
});