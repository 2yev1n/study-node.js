const { Op } = require("sequelize");
const { Post } = require("../models");

const searchPost = async (req, res) => {
    const searchWord = req.params.searchWord;

    try{
        const search = await Post.findAll({
            where: {
                [Op.or]: [
                    {
                        title: {
                            [Op.like]: "%" + searchWord + "%"
                        }
                    },
                    {
                        content: {
                            [Op.like]: "%" + searchWord + "%"
                        }
                    }
                ]
            }
        });
        
        console.log(search);

        res.status(200).json(search);
    } catch (err) {
        res.status(404).json({
            message: "찾을 수 없음"
        });

        console.error(err);
    }
};

module.exports = {
    searchPost
};