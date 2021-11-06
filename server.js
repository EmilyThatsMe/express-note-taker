// Dependencies
// ==========================================
const express = require('express');
const app = express();
const { notes } = require('./db/db.json');
const path = require('path');
const exp = require('constants');
const { request } = require('http');
const { fstat } = require('fs');
const { json } = require('express');
const PORT = 3001;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// Routes
// =========================================

// Route to get notes
 app.get('/api/notes', (req, res) => {
     let results = notes;
     console.log(req.query)
     res.json(results);
 });

// Route that returns index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Route that returns notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// API POST route
app.post('api/notes', (req, res) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    console.log('File data:', jsonString)
    response.json(JSON.parse(jsonString));

    // parse note object into json
    var notes = JSON.parse(jasonString);

    // newNote object
    const newNote = {
        title: request.body.title,
        text: request.body.text,
        id: Math.random().toString(36).substr(2,9)
    };

    console.log(newNote);

    // Push newNote into note array and stringify
    let jsonNotes = JSON.stringify(notes);

    fstat.writeFile(path.join(__dirname, "db", "db.json"), jsonNotes, (err) => {
        if (err) {
            return console.log(err);
        }   
        console.log("Success!", jsonNotes);
        return jsonNotes;
    })

});

// Listener
// ==========================================
app.listen(PORT, () => {
    console.log(`API server now on ${PORT}`)
});