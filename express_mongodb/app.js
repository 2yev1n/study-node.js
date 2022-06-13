const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017",
{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

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
