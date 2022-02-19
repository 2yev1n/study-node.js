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
db.Board = require("./board")(sequelize, Sequelize);

db.User.hasMany(db.Board, { foreignKey : "writer", targetKey : "email" });
db.Board.belongsTo(db.User, { foreignKey : "writer" });

module.exports = db;
