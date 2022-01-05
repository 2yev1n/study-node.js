const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;

db.on('error', function() {
    console.log("연결 실패");
});
db.once('open', function() {
    console.log("연결 성공!");
});

const server = app.listen(PORT, function() {
    console.log(PORT, "번 포트에서 대기 중");
});
