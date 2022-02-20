const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);
db.Hashtag = require("./hashtag")(sequelize, Sequelize);

db.User.hasMany(db.Post, { foreignKey: "UserID", targetKey: "id" });
db.Post.belongsTo(db.User, { foreignKey: "UserID" });

db.Post.hasMany(db.Hashtag, { foreignKey: "postID", targetKey : "id" });
db.Hashtag.belongsTo(db.Post, { foreignKey: "postID" });

db.User.belongsToMany(db.User, {
  foreignKey: 'followingId',
  as: 'Followers',
  through: 'follows',
});
db.User.belongsToMany(db.User, {
  foreignKey: 'follwerld',
  as: "Followings",
  through: 'follows',
});

module.exports = db;
