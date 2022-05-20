const { Post } = require("../models");

const updatePost = async(req, res) => {
    const { title, content, filed } = req.body;
    const id = req.params.id;
    const user = req.decoded;
    try{
        const post = await Post.findOne({
            where : { id : id }
        });
        if(user.id == post.writer) {
            post.update({
                title,
                content,
                filed
            })
        } else throw Error;

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