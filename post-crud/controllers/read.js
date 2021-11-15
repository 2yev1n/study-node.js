const { Post } = require("../models");

const readAllPost = async(req, res) => {
    const { writer } = req.body;

    try{
        let posts = await Post.findAll({
             where : { writer : writer }
            });
        
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({
            message: "데이터들 없음"
        });
        console.error(err);
    }
};

const readOnePost = async(req, res) => {
    const { id } = req.body;
    
    try{ 
        let post = await Post.findOne({ where : { id : id } });
        if( post === null)
        {
            res.status(404).json({
                messgae: "해당 데이터 없음"
            });
        }
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({
            messgae: "해당 데이터 없음"
        });
        console.error(err);
    }
};

const Allviews = async(req, res) => {

    try{
        let posts = await Post.findAll({ order: [['createdAt', 'DESC']] });
        res.status(200).json(posts);
    } catch(err) {
        res.status(400).json({
            message : "게시물 없음"
        });
        console.error(err);
    }
};

module.exports = {
    readAllPost,
    readOnePost,
    Allviews
};