const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.STRING(15),
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull:true,
        },
        text: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
    });
};