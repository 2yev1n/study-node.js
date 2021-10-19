const user = require("../models/user");
// const jwt = require("jsonwebtoken");
const { User } = require("../models");

const Create = async (req, res) => {
    const { id, title, text } = req.body;

    try{
        await User.create({
                id,
                title,
                text,
            });
        res.status(200).json({
            message: "게시물 작성 성공",
        });
    } catch(err){
        res.status(400).json({
            message: "게시물 작성 실패"
        });
        console.error(err);
    }
};

module.exports = { Create };