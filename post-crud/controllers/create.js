const { Post } = require("../models");

const createPost = async(req, res) => {
    const { title, content, filed } = req.body;
    const user = req.decoded;

    try{
        await Post.create({
            writer : user.id,
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