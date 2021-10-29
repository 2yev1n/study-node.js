const app = require("express")();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post('/profile', upload.single("avatar"));