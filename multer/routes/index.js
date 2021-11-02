const app = require("express")();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post('/profile', upload.single("avatar"), function (req, res, next) {
});

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next){    
});

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1}, { name: 'gallery', maxCount: 8 }]);

app.post('/cool-profile', cpUpload, function (req, res, next) {
});

app.post('/profile', upload.array(), function (req, res, next) {
});