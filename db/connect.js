const Sequelize = require("sequelize");

const { DB_USER, DB_PWD, DB_NAME, DB_SERVER } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
  host: DB_SERVER,
  dialect: "mssql",
  logging: false,
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
  define: {
    freezeTableName: true,
  },
});

const connectDB = () => {
  return sequelize.authenticate();
};

module.exports = { sequelize, connectDB };
