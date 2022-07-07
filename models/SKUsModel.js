const Sequelize = require("sequelize");
const { sequelize } = require("../db/connect");

const SKU = sequelize.define("stock_keeping-units", {
  sku_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  sku_kgs: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide a SKU!",
      },
    },
  },
});

module.exports = SKU;
