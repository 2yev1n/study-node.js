const Sequelize = require("sequelize");

module.exports = (sequelize, Datatypes) => {
    return sequelize.define("board", {
        boardId : {
            type : Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement : true,
        },
        writer : {
            type : Datatypes.STRING(36),
            allowNull: false,
        },
        title : {
            type : Datatypes.STRING(30),
            allowNull: false,
        },
        text : {
            type : Datatypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'Board',
        tableName: 'boards',
        paranoid: false,
        charset: 'UTF8MB4',
        collate: 'UTF8MB4_GENERAL_CI'
    })
}