const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('/../config/config.json')[env];
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
