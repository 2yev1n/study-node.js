const config = require("../config/config");
const mongoose = require("mongoose");

const db = {};
    db.mongoose = mongoose;
    db.url = config.url;
    db.practice = require("./practice")(mongoose);

module.exports = db;