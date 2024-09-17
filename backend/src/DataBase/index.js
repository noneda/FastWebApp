const { Sequelize } = require('sequelize');
require("dotenv").config();
const { getConfig } =  require('../config')

const config = getConfig();

const sequelize = new Sequelize(
  config.connectionMysql.MYSQL_DATABASE,
  config.connectionMysql.MYSQL_USERNAME,
  config.connectionMysql.MYSQL_PASSWORD,
  {
    host: config.connectionMysql.MYSQL_HOST,
    dialect: "mariadb",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to MYSQL connected successfully");
  })
  .catch((err) => {
    console.error("Can't connect to MYSQL:", err);
  });

module.exports = sequelize;