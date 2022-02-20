const Sequelize = require("sequelize");

module.exports = (sequelize, Datatypes) => {
    return sequelize.define("hashtag", {
        title: {
            type : Datatypes.STRING(15),
            allowNull : false,
            unique : true
        },
        postID: {
            type: Datatypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'Hashtag',
        tableName: 'hashtags',
        paranoid: false,
        charset: 'UTF8MB4',
        collate: 'UTF8MB4_GENERAL_CI'
    })
}