const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
    {
        shortId: {
            type: String,
            required: true,
            unique: true
        },
        redirectURL: {
            type: String,
            required: true,
        },
        visitedHistory: [{ timeStamp: Number }],
        createdBy: {                         // ✅ Add this field
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        }
    },
    { timestamps: true }
);

const URL = mongoose.model('URL',urlSchema);


module.exports = {
    URL,
}