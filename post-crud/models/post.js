const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        id : {
            type: DataTypes.INTEGER(),
            primaryKey: true,
            allowNull: false,
        },
        nickname : {
            type: DataTypes.STRING(45),
            foreignKey: true,
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
            type: DataTypes.STRING(),
            allowNull: false,
        },
        filed: {
            type: DataTypes.STRING(10),
            allowNull: false
        }
    })
};