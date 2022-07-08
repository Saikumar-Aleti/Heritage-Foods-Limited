const express = require("express");

const { getAllProductPrices } = require("../controllers/PriceController");

const router = express.Router();

router.route("/").get(getAllProductPrices);

module.exports = router;
