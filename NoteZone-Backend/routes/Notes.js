const express = require('express');
const Notes = require('../models/Notes');
const router = express.Router();
const verifyToken = require('../middleware/getuser');
const { body, validationResult } = require('express-validator');

//Router 1: Get all the notes using - GET "/Notes/fetchallnotes"
router.get('/fetchallnotes', verifyToken, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

//Router 2: Add a new note using - POST "/Notes/AddNote"
router.post('/addnote', verifyToken, [
    // Validate title
    body('title').notEmpty().withMessage('Title is required').isLength({ min: 6 }).withMessage('Title must be at least 6 characters long'),

    // Validate description
    body('desciption').isLength({ min: 2 }).withMessage('Description must be at least 2 characters long')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, desciption, tag } = req.body;
    const user = req.user.id;

    try {
        const note = new Notes({
            title,
            desciption,
            tag,
            user
        });

        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
