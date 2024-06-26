const express = require('express');
const Notes = require('../models/Notes'); // Corrected import
const router = express.Router();
const verifyToken = require('../middleware/getuser');
const { body, validationResult } = require('express-validator');

// Router 1: Get all the notes using - GET "/Notes/fetchallnotes"
router.get('/fetchallnotes', verifyToken, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// Router 2: Add a new note using - POST "/Notes/AddNote"
router.post('/addnote', verifyToken, [
    // Validate title
    body('title').notEmpty().withMessage('Title is required').isLength({ min: 6 }).withMessage('Title must be at least 6 characters long'),

    // Validate description
    body('description').notEmpty().withMessage('Description is required').isLength({ min: 2 }).withMessage('Description must be at least 2 characters long'),

    // Corrected field name
    body('tag').optional().isString().withMessage('Tag must be a string') // Assuming tag is optional
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, tag } = req.body;
    const user = req.user.id;

    try {
        const note = new Notes({
            title,
            description,
            tag
        });

        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// Router 3: Update note using PUT "/Notes/updatenote/:id"
router.put('/updatenote/:id', verifyToken, async (req, res) => {
    const { title, description, tag } = req.body;

    // Create a newNote object
    const newNote = {};
    if (title) newNote.title = title;
    if (description) newNote.description = description;
    if (tag) newNote.tag = tag;

    try {
        // Find the note to be updated
        let note = await Notes.findById(req.params.id);

        if (!note) {
            return res.status(404).send("Note not found");
        }

        // Check if the user is authorized to update the note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        // Update the note
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });

        res.json(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Router 4: Delete note using DELETE "/Notes/deletenote/:id"
router.delete('/deletenote/:id', verifyToken, async (req, res) => {
    try {
        // Find the note to be deleted
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        // Check if the user is authorized to delete the note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).json({ message: "Not allowed" });
        }

        // Delete the note
        await Notes.findByIdAndDelete(req.params.id);

        res.json({ message: "Successfully deleted the note" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
