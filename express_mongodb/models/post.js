const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    content: { type: Text, default: false }
},{
    timestamps: true
});

module.exports = postSchema;