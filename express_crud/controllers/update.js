const { User } = require("../models");

const Update = async(req, res) => {
    const { id, age, name } = req.body;
    try{
        await User.update({
            age : age,
            name : name,
        },
        {
            where : { id : id }
        });
        res.status(200).json({
            message: "수정 완료"
        });
    } catch(err) {
        res.status(404).json({
            message: "오류"
        });
        console.error(err);
    }
};

module.exports = {
    Update
};