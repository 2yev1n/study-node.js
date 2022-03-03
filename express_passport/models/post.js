const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            content: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            img: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: false,
            charset: 'UTF8MB4',
            collate: 'UTF8MB4_GENERAL_CI'
        });
    }

    static associate(db) {
        db.Post.belongsTo(db.User);
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    }
};