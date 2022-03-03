const Sequelize = require("sequelize");

module.exports = class Hashtag extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            title: {
            type: Sequelize.STRING(15),
            allowNull: false,
            unique: true,
            },
        },  {
        sequelize,
        timestamps: true,
        modelName: 'Hashtag',
        tableName: 'hashtags',
        paranoid: false,
        charset: 'UTF8MB4',
        collate: 'UTF8MB4_GENERAL_CI'
        })
    }

    static associate(db) {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    }
};