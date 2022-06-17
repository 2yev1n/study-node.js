const { Post } = require("../models");

const deletePost = async(req, res) => {
    const id = req.params.id;
    const user = req.decoded;
    try{
        
        const post = await Post.findOne({
            where : {
                id : id,
                writer: user.id
            }
        });
        
        if(post!= null) {
            await post.destroy();
            return res.status(200).json({
                message: "게시물 삭제 성공"
            });
        } else throw Error;
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