const { User } = require("../models");

const Delete = async(req, res) => {
    const { id } = req.body;
    try{
        await User.destroy({ where : {id : id} });
    
        res.status(200).json({
            message: "삭제 완료"
        });
    } catch(err) {
        res.status(404).json({
            message: "id 없음"
        });
        console.log(err);
    }
};

module.exports = {
    Delete
};