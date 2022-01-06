const Sequelize = require('sequelize');

module.exports =(sequelize, Datatypes) => {
  return sequelize.define("user", {
    user_id: {
      type: Datatypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    password: {
      type: Datatypes.STRING(),
      allowNull: false,
    },
    email: { 
      type: Datatypes.STRING(36),
      allowNull: false,
      unique: true,
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'User',
    tableName: 'users',
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
};