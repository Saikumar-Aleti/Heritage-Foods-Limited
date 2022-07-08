const { sequelize } = require("./connect");

const sync = () => {
  return sequelize.sync({ force: true });
};

module.exports = { sync };
