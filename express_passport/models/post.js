const Sequelize = require("sequelize");

module.exports = (sequelize, Datatypes) => {
    return sequelize.define("post", {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        content: {
            type: Datatypes.TEXT,
            allowNull: false
        },
        img: {
            type: Datatypes.STRING(200),
            allowNull: true,
        },
        UserID: {
            type: Datatypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'Post',
        tableName: 'posts',
        paranoid: false,
        charset: 'UTF8MB4',
        collate: 'UTF8MB4_GENERAL_CI'
    })
}