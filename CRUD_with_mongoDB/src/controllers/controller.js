const db = require("../models/index");
const Practice = db.practice;

const readPost = async(req, res) => {
    
    try{
        const result = await Practice.find();
        
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

const createPost = async(req, res) => {
    const practice = new Practice();
    
    try{
        practice.title = req.body.title;
        practice.context = req.body.context;

        practice.save(practice);

        return res.status(200).json({
            message: "작성 성공",
            practice
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


        let New = await Practice.update(
            { _id : _id },
            {
                title: title,
                context: context
            }
        );
    

        New  = await Practice.findOne({
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
        res.status(404).json({
            message: "해당 게시물 없음"
        });
    }
};

const deletePost = async(req, res) => {
    const _id = req.params.id;

    try{
        const Post = await Practice.deleteOne(
            { _id: _id }
        );

        res.status(200).json({
            message: "게시물 삭제 성공"
        });

    } catch(err) {
        console.error(err);
        res.status(404).json({
            message: "해당 게시물 없음"
        });
    };
}

module.exports = {
    readPost,
    createPost,
    updatePost,
    deletePost
};