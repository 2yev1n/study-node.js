const { chatroom } = require("../models");
const { Chatroom } = require("../models/chatroom");

const createRoom = async(req, res) => {
    const { name } = req.body;

    try{
        const room = await Chatroom.findOne({ name });
        if(room) {
            return res.status(400).json({
                message: "이미 있는 이름의 채팅방"
            });
        };

        const newroom = new Chatroom({ name });
        
        await newroom.save();
        
        return res.status(200).json({
            message: "채팅방 만들기 성공",
            newroom
        });
    } catch(err) {
        console.error(err);
        res.status(400).json({
            message: "채팅방 만들기 실패"
        });
    };
};

module.exports = {
    createRoom,

}