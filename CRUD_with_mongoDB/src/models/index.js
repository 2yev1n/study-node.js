const config = require("../config/config");
const mongoose = require("mongoose");

const db = {};
    db.mongoose = mongoose;
    db.url = config.url;
    db.post = require("./post");
    db.user = require("./user");

module.exports = db;