const uploadImage = async(req, res) => {
    const image = req.file
        
    try{ 
        
        res.status(200).json({
            message: "사진 업로드 성공",
        });
    
    } 
    catch(err) {
        res.status(403).json({
           message: "사진 업로드 실패"
        });
        console.error(err);
    }
};

module.exports = {
    uploadImage
};