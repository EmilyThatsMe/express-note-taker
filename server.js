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
app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

// Listener
// ==========================================
app.listen(3001, () => {
    console.log(`API server now on port 3001`)
});