const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const controller = require("../controllers/user");

const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/');
      },
      filename: (req, file, cb) => {
        cb(null, new Date().valueOf() + path.extname(file.originalname));
      },
    }),
  });

app.post('/profile', upload.single('image'), controller.uploadProfile);

module.exports = app;