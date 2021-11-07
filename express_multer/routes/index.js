const express = require("express");
const router = express();
const multer = require("multer");
const upload = multer({ dest: "uploadsFiles/" });   // dest : 파일이 저장될 위치
const controller = require("../controllers/user");

router.post('/profile', upload.single('acatar'), controller.uploadProfile);
    // req.file은 'acatar'라는 필드의 파일 정보
    // 텍스트 필드가 있는 경우, req.body가 이를 포함함.

// router.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
//     // req.files는 'photos'라는 파일 정보를 배열형태로 가지고 있음.
//     // 텍스트 필드가 있는 경우, req.body가 이를 포함함.
// });

// const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1}, { name: 'gallery', maxCount: 8}]);
// router.post('/cool-profile', cpUpload, function (req, res, next) {
//     // req.files는 (String -> Array) 형태의 객체
//     // 필드명은 객체의 key에, 파일 정보는 배열로 value에 저장
//     // 
//     // ex)
//     // req.files['avatar'][0] -> File
//     // req.files['gallery'] -> Array
//     //
//     // 텍스트 필드가 있는 경우, req.body가 이를 포함함
// });

module.exports = router;