const config = require("../config/config");
const mongoose = require("mongoose");

const db = {};
    db.mongoose = mongoose;
    db.url = config.url;
    db.message = require("./message");
    db.user = require("./user");
    db.chatroom = require("./chatroom");

module.exports = db;