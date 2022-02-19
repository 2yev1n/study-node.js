const Sequelize = require('sequelize');

module.exports =(sequelize, Datatypes) => {
  return sequelize.define("user", {
    userId: {
      type: Datatypes.STRING(15),
      allowNull: true,
      unique: true
    },
    password: {
      type: Datatypes.STRING(),
      allowNull: false,
    },
    email: { 
      type: Datatypes.STRING(36),
      allowNull: false,
      primaryKey: true,
    },
    provider: {
      type: Datatypes.STRING(10),
      allowNull: false,
      defaultValue: "local",
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'User',
    tableName: 'users',
    paranoid: false,
    charset: 'UTF8MB4',
    collate: 'UTF8MB4_GENERAL_CI',
  });
};