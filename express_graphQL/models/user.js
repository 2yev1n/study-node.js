const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(35),
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(),
            allowNull: false,
        }
    },{
        sequelize,
        tableName: "Users",
        timestamps: true,
        charset: "utf8",
        collation: "utf8_general_ci",
    });
};