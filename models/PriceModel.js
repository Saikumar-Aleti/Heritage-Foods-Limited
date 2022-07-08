const Sequelize = require("sequelize");
const { sequelize } = require("../db/connect");

const Item = require("./ItemsModel");
const Region = require("./RegionsModel");
const Packing = require("./PackingModel");
const PelletSize = require("./PelletSizeModel");
const SKU = require("./SKUsModel");

const ProductPrice = sequelize.define("product_prices", {
  prouduct_price_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  pellet_price: {
    type: Sequelize.INTEGER,
  },
  mash_price: {
    type: Sequelize.INTEGER,
  },
});

Item.hasMany(ProductPrice, { foreignKey: "item_id" });
ProductPrice.belongsTo(Item, { foreignKey: "item_id" });

Region.hasMany(ProductPrice, { foreignKey: "region_id" });
ProductPrice.belongsTo(Region, { foreignKey: "region_id" });

SKU.hasMany(ProductPrice, { foreignKey: "sku_id" });
ProductPrice.belongsTo(SKU, { foreignKey: "sku_id" });

PelletSize.hasMany(ProductPrice, { foreignKey: "pellet_size_id" });
ProductPrice.belongsTo(PelletSize, { foreignKey: "pellet_size_id" });

Packing.hasMany(ProductPrice, { foreignKey: "packing_id" });
ProductPrice.belongsTo(Packing, { foreignKey: "packing_id" });

module.exports = ProductPrice;
