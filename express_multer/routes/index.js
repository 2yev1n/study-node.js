const router = require("express")();
const multer = require("multer");
const upload = multer({ dest: "uploadsFiles/" });   // dest : 파일이 저장될 위치
const controller = require("../controllers/user");

router.post('/upload', upload.single('userfile'), function(req, res){
    res.send('Uploaded! : ', req.file); // object를 리턴함
    console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
  });

// router.post('/upload', upload.single('avatar'), (req, res, next) => {
//     console.log(req.file);
//     console.log('파일 업로드');
//     res.redirect('/');
// });

module.exports = router;