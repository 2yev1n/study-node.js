const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        id : {
            type: DataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true,
        },
        name : {
            type: DataTypes.STRING(45),
            foreignKey: true,
            allowNull: false,
        },
        email : {
            type: DataTypes.STRING(),
            unique: true,
        },
        password : {
            type: DataTypes.STRING(),
            allowNull: false
        }
    });
};