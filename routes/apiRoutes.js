// // Dependencies
// //===================================================
// const router = require("express").Router();
// const path = require("path");

// // Routes
// // ==================================================

// // API Routes
// router.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

// router.post("/api/notes", (req, res) => {
//   req.body.id = notes.length;
//   const newNote = req.body;
//   notes.push(newNote);
//   fs.writeFileSync(
//     path.join(__dirname, "../../db/db.json"),
//     JSON.stringify(notes, null, 2)
//   );
//   res.json(newNote);
// });

// router.delete("/api/notes/:id", (req, res) => {
//   //remove the appropriate note
//   const deleteIndex = req.params.id;
//   notes.splice(deleteIndex, 1);

//   //reassign the notei ids
//   for (let i = 0; i < notes.length; i++) {
//     console.log(notes[i]);
//     notes[i].id = i;
//     console.log(notes[i]);
//   }

//   fs.writeFileSync(
//     path.join(__dirname, "../../db/db.json"),
//     JSON.stringify(notes, null, 2)
//   );
//   //update the db.json file
//   res.json(req.body);
// });

// // Export
// // =====================================
// module.exports = router;
