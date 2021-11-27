const multer = require("multer");
const util = require("./util");

const user = {
    uploadProfile: async (req, res) => {
        const image = req.file.path;
        console.log(req.file);
        try{
            if (image === undefined) {
                return res.status(400).send(
                    util.fail(400, "이미지가 존재하지 않습니다.")
                )}
            else await res.status(200).send(
                util.success(200, "요청 성공", image)
            );
        }
        catch(err) {
            res.status(400).json({
                message: "오류"
            });
            console.error(err);
            };
    }
};

module.exports = user;