 const isLoggedIn = (req, res, next) => {
    if(req.isAuthenicated()) {
        next();
    } else {
        res.status(403).send("로그인이 필요");
    }
};

const isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenicated()) {
        next();
    } else {
        const message = encodeURIComponent("로그인한 상태입니다.");
        res.redirect(`/?error=${message}`);
    }
};

module.exports = {
    isLoggedIn,
    isNotLoggedIn
}