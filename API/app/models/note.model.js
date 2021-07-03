const mongoose = require('mongoose');
const {v4: uuidv4}=require('uuid')

const NoteSchema = mongoose.Schema({
    _id: {
        type: String,
        require: false,
        default : uuidv4()
    },
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);