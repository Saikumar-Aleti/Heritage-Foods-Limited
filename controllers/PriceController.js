const PriceModel = require("../models/PriceModel");
const Region = require("../models/RegionsModel");
const SKU = require("../models/SKUsModel");
const Item = require("../models/ItemsModel");
const PelletSize = require("../models/PelletSizeModel");
const Packing = require("../models/PackingModel");
const { StatusCodes } = require("http-status-codes");

const getAllProductPrices = async (req, res) => {
  const allProductPrices = await PriceModel.findAll({
    attributes: ["pellet_price", "mash_price"],
    include: [
      { model: Item, attributes: ["description"] },
      { model: Region, attributes: ["name"] },
      { model: SKU, attributes: ["sku_kgs"] },
      { model: PelletSize, attributes: ["pellet_size"] },
      { model: Packing, attributes: ["packing"] },
    ],
  });
  res.status(StatusCodes.OK).json(allProductPrices);
};
module.exports = { getAllProductPrices };
