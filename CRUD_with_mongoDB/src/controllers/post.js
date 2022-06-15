const { Post } = require("../models/post");


const readPost = async(req, res) => {
    
    try{
        const result = await Post.find();
        
        res.status(200).json({
            message: "조회 성공",
            result
        })
    } catch(err) {
        console.error(err);

        return res.status(404).json({
            message: "조회 실패"
        });
    };
    ;
};

const readOnePost = async(req, res) => {

    try{
        const _id = req.params.id;
        const result = await Post.find({
            _id: _id
        });
        
        res.status(200).json({
            message: "조회 성공",
            result
        });
    } catch(err) {
        console.error(err);
        return res.status(404).json({
            message: "조회 실패"
        });
    };
}

const createPost = async(req, res) => {
    const post = new Post();
    
    try{
        post.title = req.body.title;
        post.content = req.body.content;

        post.save(post);

        return res.status(200).json({
            message: "작성 성공",
            post
        });
    } catch(err) { 
        console.error(err);
        return res.status(400).json({
            message: "작성 실패",
        });
    };
};

const updatePost = async(req, res) => {
    const _id = req.params.id;
    
    try{
        const { title, context } = req.body;


        let New = await Post.update(
            { _id : _id },
            {
                title: title,
                context: context
            }
        );
    

        New  = await Post.findOne({
            where: {
                _id: _id
            }
        });

        res.status(200).json({
            message: "수정 성공",
            New
        });
    } catch(err) {
        console.error(err);
        return res.status(404).json({
            message: "해당 게시물 없음"
        });
    }
};

const deletePost = async(req, res) => {
    const _id = req.params.id;

    try{
        const Post = await Post.deleteOne(
            { _id: _id }
        );

        res.status(200).json({
            message: "게시물 삭제 성공"
        });

    } catch(err) {
        console.error(err);
        return res.status(404).json({
            message: "해당 게시물 없음"
        });
    };
}

module.exports = {
    readPost,
    readOnePost,
    createPost,
    updatePost,
    deletePost
};