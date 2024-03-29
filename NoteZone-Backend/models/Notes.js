const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    description: { // Corrected field name
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    tag: {
        type: String,
        default: "General"
    }
});

module.exports = mongoose.model('Notes', NotesSchema);
