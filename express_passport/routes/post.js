const router = require("express")();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { isLoggedIn } = require("./middleware");
const { Post, Hashtag } = require("../models");

try {
    fs.readdirSync('uploads');
} catch (err) {
    console.log("uploads 폴더가 없어서 uploads 폴더를 생성합니다.");
    fs.mkdirSync('uploads');
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/img", isLoggedIn, upload.single('img'), (req, res, next) => {
    console.log(req.file);
    res.json({ url: `/img/${req.file.filename}` });
});

const upload2 = multer();
router.post("/", isLoggedIn, upload2.none(), async (req, res, next) => {
    try{ 
        console.log(req.user);
        const post = await Post.create({
            content: req.body.content,
            img: req.body.url,
            UserID: req.user.id,
        });

        const hashtags = req.body.content.match(/#[^\s#]*/g);
        if(hashtags) { 
            const result = await Promise.all(
                hashtags.map(tag => {
                    return Hashtag.findOrCreate({
                        where: { title: tag.slice(1).toLowerCase() },
                    });
                }),
            );
            console.log('result: ', result);
            await post.addHashtags(result.map(r => r[0]));
        }
        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;