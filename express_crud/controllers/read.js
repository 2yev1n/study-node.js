const { User } = require("../models");

const readOne = async(req, res) => {
    const { id } = req.body;
    try{
        let user = await User.findOne({where : {id : id}});
    
        res.status(200).json(user);
    } catch(err) {
        res.status(404).json({
            message: "해당 데이터 없음"
        });
        console.error(err);
    }
};

const readAll = async(req, res) => {
    try{
        let users = await User.findAll({ order: [['createdAt', 'DESC']] });
        res.status(200).json(users);
    }
    catch(err) {
        res.status(400).json({
            message:"오류"
        });
        console.error(err);
    }
};

module.exports = { 
    readOne,
    readAll
 };