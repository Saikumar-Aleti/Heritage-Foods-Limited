const { sequelize } = require("./connect");

const sync = () => {
  return sequelize.sync();
};

module.exports = { sync };
