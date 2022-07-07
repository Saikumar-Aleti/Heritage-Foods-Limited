const Sequelize = require("sequelize");
const { sequelize } = require("../db/connect");

const Packing = sequelize.define("packing", {
  packing_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  packing: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide a packing!",
      },
    },
  },
});

module.exports = Packing;
