const Sequelize = require("sequelize");
const { sequelize } = require("../db/connect");

const Item = sequelize.define("items", {
  item_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide an item description!",
      },
    },
  },
});

module.exports = Item;
