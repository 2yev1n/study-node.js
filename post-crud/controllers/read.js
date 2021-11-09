const { Post } = require("../models");

const readAllPost = async(req, res) => {
    const { id } = req.body;
    try{
        let post = await Post.findOne({ where : { id : id } });
        
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({
            message: "해당 데이터 없음"
        });
        console.error(err);
    }
};

const readOnePost = async(req, res) => {
    const { id, title } = req.body;
    
    try{ 
        let post = await Post.findOne({ where : { id : id, title : title } });

        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({
            messgae: "해당 데이터들 없음"
        });
        console.error(err);
    }
};

module.exports = {
    readAllPost,
    readOnePost
};