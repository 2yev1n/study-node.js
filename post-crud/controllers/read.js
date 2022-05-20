const { Post } = require("../models");

const readOnePost = async(req, res) => {
    const id = req.params.id;
    
    try{ 
        let post = await Post.findOne({ where : { id : id } });

        if(post === null)
        {
            res.status(404).json({
                messgae: "해당 데이터 없음"
            });
        } else{
            res.status(200).json(post);
        }
    } catch (err) {
        res.status(404).json({
            messgae: "해당 데이터 없음"
        });
        console.error(err);
    }
};

const allViews = async(req, res) => {

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


const viewMyPage = async(req, res) => {
    const user = req.decoded.id;

    try{
        const post = await Post.findAll({
            where: {
                writer : user
            }
        })
        res.status(200).json({
            post
        })
    } catch(err) {
        res.status(400).json({
            message: "게시물 조회 실패",
        });
        console.log(err);
    }
}

module.exports = {
    readOnePost,
    allViews,
    viewMyPage
};