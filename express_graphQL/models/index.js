const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];

const db = {};
const sequelize = new Sequelize(
    { ... config, sync: false }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Users = require("./user")(sequelize, Sequelize);

module.exports = db;