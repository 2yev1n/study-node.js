const { Post } = require("../models");

const updatePost = async(req, res) => {
    const { id, title, content, filed } = req.body;

    try{
        await Post.update({
            content : content,
            filed : filed
        },
        {
            where : { id : id, title : title }
        });
        res.status(200).json({
            message: "게시글 수정 완료"
        });
    } catch (err) {
        res.status(404).json({
            message: "해당 게시글 없음"
        });
        console.error(err);
    }
};

module.exports = {
    updatePost
};