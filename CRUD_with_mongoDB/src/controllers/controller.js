const db = require("../models/index");
const Practice = db.practice;

const read = async(req, res) => {
    
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

const create = async(req, res) => {
    const practice = new Practice();
    
    try{
        practice.title = req.body.title;
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

const update = async(req, res) => {
    const id = req.params.id;
    
    try{
        const { title } = req.body.title;

        let New = await Practice.findOneAndUpdate(
            id,
            title,
        );
        New  = await Practice.findOne(id);

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
}

module.exports = {
    read,
    create,
    update
};