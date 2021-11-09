const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        id : {
            type: DataTypes.STRING(5),
            primaryKey: true,
            allowNull: false
        },
        nickname : {
            type: DataTypes.STRING(45),
            foreignKey: true,
            allowNull: true
        },
        content: {
            type: DataTypes.TEXT(),
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        picture: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        filed: {
            type: DataTypes.STRING(10),
            allowNull: false
        }
    })
};