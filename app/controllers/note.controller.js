const Note = require('../models/note.model.js');

exports.create = async(req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const note = new Note({
        title: req.body.title || "Untitled Note", 
        content: req.body.content
    });

    try {
        const data= await note.save()
        res.send(data)
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    }

    // Save Note in the database
    // note.save()
    // .then(data => {
    //     res.send(data);
    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while creating the Note."
    //     });
    // });
};

exports.findAll = async(req, res) => {
    try {
        const data=await Note.find()
        res.send(data)
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
            });
    }

    // Note.find()
    // .then(notes => {
    //     res.send(notes);
    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while retrieving notes."
    //     });
    // });
};

exports.findOne = async (req, res) => {
    try {
        const data = await Note.findById(req.params.noteId)
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });   };
        res.send(data)
    } catch (error) {
        res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    }

//     Note.findById(req.params.noteId)
//     .then(note => {
//         if(!note) {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });            
//         }
//         res.send(note);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });                
//         }
//         return res.status(500).send({
//             message: "Error retrieving note with id " + req.params.noteId
//         });
//     });
// 
};

exports.update = async (req, res) => {
    
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    
    try {
        const data=await Note.findByIdAndUpdate(req.params.noteId, {
            title: req.body.title || "Untitled Note",
            content: req.body.content
        }, {new: true})
        res.send(data)
    } catch (error) {
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    }

    // Find note and update it with the request body
    // Note.findByIdAndUpdate(req.params.noteId, {
    //     title: req.body.title || "Untitled Note",
    //     content: req.body.content
    // }, {new: true})
    // .then(note => {
    //     if(!note) {
    //         return res.status(404).send({
    //             message: "Note not found with id " + req.params.noteId
    //         });
    //     }
    //     res.send(note);
    // }).catch(err => {
    //     if(err.kind === 'ObjectId') {
    //         return res.status(404).send({
    //             message: "Note not found with id " + req.params.noteId
    //         });                
    //     }
    //     return res.status(500).send({
    //         message: "Error updating note with id " + req.params.noteId
    //     });
    // });
};

exports.delete =async (req, res) => {
    
    try {
        const data= await Note.findByIdAndRemove(req.params.noteId)
        if(!data) {
            res.status(404).send(
            ` message: "Note not found with id " + ${req.params.noteId}`
            );
        }
        res.send({"message" : "deleted successfully"})
    } catch (error) {
        res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    }
    
    // Note.findByIdAndRemove(req.params.noteId)
    // .then(note => {
    //     if(!note) {
    //         return res.status(404).send({
    //             message: "Note not found with id " + req.params.noteId
    //         });
    //     }
    //     res.send({message: "Note deleted successfully!"});
    // }).catch(err => {
    //     if(err.kind === 'ObjectId' || err.name === 'NotFound') {
    //         return res.status(404).send({
    //             message: "Note not found with id " + req.params.noteId
    //         });                
    //     }
    //     return res.status(500).send({
    //         message: "Could not delete note with id " + req.params.noteId
    //     });
    // });
};