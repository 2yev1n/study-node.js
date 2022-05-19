const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Post = require("./post")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);

db.User.hasMany(db.Post, { foreignKey: "writer", targetKey: "id"});
db.Post.belongsTo(db.User, { foreignKey: "writer"});

module.exports = db;