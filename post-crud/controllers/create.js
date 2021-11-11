const { Post } = require("../models");

// let Id = 0;

const createPost = async(req, res) => {
    const { writer, title, content, filed } = req.body;

    // Id = Id + 1;

    // // Id = Post.max('id').then(max => {});

    try{
        await Post.create({
            writer,
            title,
            content,
            filed,
        });
        res.status(200).json({
            message: "게시물 작성 성공"
        });
    } catch(err) {
        res.status(404).json({
            message: "작성 실패"
        });
        console.error(err);
    }
};

module.exports = {
    createPost
};