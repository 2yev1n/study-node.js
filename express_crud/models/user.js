const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.STRING(15),
            primaryKey: true,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        name: {
            type: DataTypes.STRING(5),
            allowNull: false,
        },
    });
};