const { Post } = require("../models");

const createPost = async(req, res) => {
    const { title, content, filed } = req.body;
    const user = req.decoded;

    try{
        console.log(user);
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

const readAllPost = async(req, res) => {

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


const readMyPage = async(req, res) => {
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
};

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
    createPost,
    deletePost,
    readOnePost,
    readAllPost,
    readMyPage,
    updatePost
};