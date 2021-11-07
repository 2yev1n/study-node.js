const { User } = require("../models");

const deleteOne = async(req, res) => {
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

const deleteAll = async(req, res) => {
    try{
        await User.destroy({ where: {}, truncate: true });

        res.status(200).json({
            message: "전체삭제(초기화) 완료"
        });

    } catch (err) {
        res.status(400).json({
            message: "전체삭제 실패"
        });
        console.error(err);
    }
};

module.exports = {
    deleteOne,
    deleteAll
};