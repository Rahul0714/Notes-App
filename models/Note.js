const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    dateadded: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Note", noteSchema);