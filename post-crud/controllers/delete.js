const { Post } = require("../models");

const deletePost = async(req, res) => {
    const { id } = req.body;

    try{
        await Post.destroy({ where : { id : id } });

        res.status(200).json({
            messgae: "게시물 삭제 성공"
        });
    } catch(err) {
        res.status(404).json({
            message: "잘못된 요청 양식"
        });
        console.error(err);
    }
};

module.exports = {
    deletePost
};