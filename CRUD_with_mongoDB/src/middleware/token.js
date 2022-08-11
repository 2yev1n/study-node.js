const jwt = require("jsonwebtoken");

const tokenMiddleware = async(req, res) => {
    const token = req.headers["access-token"];

    if(!token) {
        res.status(401).json({
            message: "로그인 되어 있지 않음"
        });
    };

    try{
        jwt.verify(token, req.app.get("jwt-secret"), (err, decoded) => {
            if(err) throw new Error(err);
            req.decoded = decoded;
            next();
        });
    } catch(err) {
        res.status(401).json({
            message: "토큰 확인 실패"
        });
    }
}

module.exports = { tokenMiddleware };