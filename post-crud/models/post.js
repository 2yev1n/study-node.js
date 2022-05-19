const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Posts', {
        id : {
            type: DataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true,
        },
        writer : {
            type: DataTypes.INTEGER(),
            foreignKey: true,
            allowNull: false,
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