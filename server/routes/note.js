const express = require("express")
const Note = require("../models/note")
const router = express.Router()

router
.get('/getAllNotes', (req, res) => {
  try {
    const notes = Note.getNotes();
    res.send(notes)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})


// Create New note route
.post('/addNote', async (req, res) => {
  try {
    const note = await Note.addNote(req.body)
    res.send({...note})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

// read an existing note route
.post('/viewNote', async (req, res) => {
  try {
    const note = await Note.viewNote(req.body)
    res.send({...note})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})


// edit note
.put('/editNote', async (req, res) => {
  try  {
    let note = await Note.editNote(req.body);
    res.send({...note})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

// delete user
.delete('/delete', async (req, res) => {
  try {
    await Note.deleteNote(req.body);
    res.send({success: "your note has been deleted :`("})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router;