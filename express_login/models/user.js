const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        email: {
            type:DataTypes.STRING(35),
            primaryKey: true,       // 기본키
            allowNull: false,
            unique: true,       // 고유 값
        },
        name: {
            type: DataTypes.STRING(5),
            allowNull: false,   
        },
        password: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
    });
};