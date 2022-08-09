const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    chatroom: { 
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true
     },
    message: { 
        type: String, 
        required: true
    }, 
}, {
    timestamps: true
});

const Message = mongoose.model("Message", messageSchema);

module.exports = { Message };