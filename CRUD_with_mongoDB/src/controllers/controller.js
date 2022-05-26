const db = require("../models/index");
const Practice = db.practice;

const read = async(req, res) => {
    Practice.find().then((result) => {
        
        try{
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
    });
};

const create = async(req, res, next) => {
    const practice = new Practice();
    
    practice.title = req.body.title;

    practice.save((err) => {
        if(err) {
            console.error(err);
            return res.status(400).json({
                message: "삽입 실패"
            });
        } else { 
            return res.status(200).json({
                message: "성공",
                practice
            })
        }
    })
}

module.exports = {
    read,
    create
};