const user = {
    uploadProfile: async (req, res) => {
        const image = req.file.path;
        console.log(req.file);

        try{
            res.status(200).json({
                message: " 요청 성공"
            }, req.file);
        }
        catch(err) {
            if (image === undefined) {
            return res.status(400).json({
                message: "이미지가 존재하지 않습니다."
            }),
            console.error(err);
            }
        }
    }
};

module.exports = { user };