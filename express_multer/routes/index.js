const express = require("express");
const app = express();

const multer = require("multer");
const upload = multer({ 
    dest: "uploads/" 
});
const controller = require("../controllers/user");

app.post('/profile', upload.single('image'), controller.uploadProfile);

module.exports = app;