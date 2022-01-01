const jwt = require("jsonwebtoken");
const Refreshtoken = require("../models/refreshtoken");

const accessToken = async(req, user) => {
    const secret = req.app.get("jwt-secret");
    const token = await jwt.sign(
        {
            email : user.email,
            name : user.name,
        }, secret,
        {
            expiresIn: "1h",
        }
    );
    return token;
};

const refreshToken = async(req, user) => {
    const secret  = req.app.get("refresh-secret");
    const token = await jwt.sign(
        {
            email : user.email,
            name : user.name,
        }, secret,
        {
            expiresIn: "14d",
        }
    );
    return token;
}

module.exports = {
    accessToken,
    refreshToken
};