const Sequelize = require("sequelize");
const { sequelize } = require("../db/connect");

const Region = sequelize.define("regions", {
  region_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide a region name!",
      },
    },
  },
});

module.exports = Region;
