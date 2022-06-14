const { Post } = require("../models/post");

const createPost = async(req, res) => {
    try {
        const post = new Post();

        post.title = req.body.title;
        post.content = req.body.content;
        
        post.save();

        res.status(200).json({
            message: "게시글 작성 성공"
        })
    } catch(err) {
        console.error(err);
        res.status(400).json({
            message: "게시글 작성 실패"
        });
    }
};

const readAllPost = async(req, res) => {
    try{
        const result = await Post.find();
        console.log(result);
        
        if(result != null) {
            res.status(200).json({
                message: "게시글 조회 성공",
                result
            });
        } else throw Error;
    } catch(err) {
        console.error(err);
        res.status(404).json({
            message: "게시글 없음"
        });
    }
}

module.exports = {
    createPost,
    readAllPost
};