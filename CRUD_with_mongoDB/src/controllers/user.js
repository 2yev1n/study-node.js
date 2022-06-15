const { User } = require("../models/user");

const signUp = async(req, res) => {
    const user = new User();

    try{
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;

        await user.save(user);

        return res.status(200).json({
            message: "회원가입 성공",
            user
        });
    } catch(err) {
        console.error(err);
        return res.status(400).json({
            message: "이미 가입한 이메일"
        });
    }
};

module.exports = {
    signUp
};