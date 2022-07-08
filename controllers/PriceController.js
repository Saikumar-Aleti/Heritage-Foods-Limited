const PriceModel = require("../models/PriceModel");

const getAllProductPrices = async (req, res) => {
  res.send("Get All Product Prices!");
};

module.exports = { getAllProductPrices };
