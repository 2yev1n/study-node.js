const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        email: {
            type:DataTypes.STRING(20),
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(5),
            allowNull: false,   
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    });
};