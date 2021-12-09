const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";      // config.json
const config = require("../config/config.json")[env];       // 서버에서 DB를 실행했을 때, 어떤 경로를 통해 어떤 파일을 불러와서 실행하는지가 기재
const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,       // * name 추가하면 왜 안되는지
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);      //  sequelize와 user를 접근 할 수 있음

module.exports = db;