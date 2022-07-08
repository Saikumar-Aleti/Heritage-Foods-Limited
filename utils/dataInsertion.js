const Item = require("../models/ItemsModel");
const Region = require("../models/RegionsModel");
const Packing = require("../models/PackingModel");
const PelletSize = require("../models/PelletSizeModel");
const SKU = require("../models/SKUsModel");
const ProductPrice = require("../models/PriceModel");

const dataInsertion = () => {
  try {
    Item.bulkCreate([
      {
        description: "Dairy Deluxe",
      },
      {
        description: "Dairy Gold",
      },
      {
        description: "Dairy Bypass",
      },
      {
        description: "Dairy Power",
      },
    ]);
    Region.bulkCreate([
      {
        name: "Vijayawada",
      },
      {
        name: "Krishna",
      },
      {
        name: "WG and EG",
      },
    ]);
    SKU.bulkCreate([
      { sku_kgs: 25 },
      { sku_kgs: 50 },
      { sku_kgs: 100 },
      { sku_kgs: 125 },
    ]);
    PelletSize.bulkCreate([
      { pellet_size: "4MM" },
      { pellet_size: "6MM" },
      { pellet_size: "12MM" },
      { pellet_size: "15MM" },
      { pellet_size: "25MM" },
      { pellet_size: "30MM" },
    ]);
    ProductPrice.bulkCreate([
      {
        region_id: 1,
        item_id: 1,

        sku_id: 2,
        pellet_size_id: 2,
        packing_id: 1,
        pellet_price: 809,
        mash_price: 700,
      },
      {
        region_id: 1,
        item_id: 2,

        sku_id: 1,
        pellet_size_id: 2,
        packing_id: 1,
        pellet_price: 809,
        mash_price: 700,
      },
    ]);
    Packing.create({ packing: "PP" });
    ProductPrice.bulkCreate([
      {
        region_id: 1,
        item_id: 1,
        sku_id: 2,
        pellet_size_id: 2,
        packing_id: 1,
        pellet_price: 809,
        mash_price: 700,
      },
      {
        region_id: 1,
        item_id: 2,
        sku_id: 1,
        pellet_size_id: 4,
        packing_id: 1,
        pellet_price: 442,
      },
      {
        region_id: 1,
        item_id: 2,
        sku_id: 2,
        pellet_size_id: 2,
        packing_id: 1,
        pellet_price: 884,
        mash_price: 855,
      },
      {
        region_id: 1,
        item_id: 2,
        sku_id: 2,
        pellet_size_id: 3,
        packing_id: 1,
        pellet_price: 1312,
      },
      {
        region_id: 1,
        item_id: 3,
        sku_id: 2,
        pellet_size_id: 2,
        packing_id: 1,
        pellet_price: 1054,
        mash_price: 750,
      },
      {
        region_id: 1,
        item_id: 4,
        sku_id: 2,
        pellet_size_id: 1,
        packing_id: 1,
        pellet_price: 1120,
      },
      {
        region_id: 2,
        item_id: 1,
        sku_id: 3,
        pellet_size_id: 2,
        packing_id: 1,
        pellet_price: 809,
        mash_price: 700,
      },
      {
        region_id: 2,
        item_id: 2,
        sku_id: 1,
        pellet_size_id: 2,
        packing_id: 1,
        pellet_price: 512,
        mash_price: 350,
      },
      {
        region_id: 2,
        item_id: 2,
        sku_id: 2,
        pellet_size_id: 2,
        packing_id: 1,
        pellet_price: 884,
        mash_price: 855,
      },
      {
        region_id: 2,
        item_id: 2,
        sku_id: 4,
        pellet_size_id: 3,
        packing_id: 1,
        pellet_price: 900,
        mash_price: 650,
      },
      {
        region_id: 2,
        item_id: 3,
        sku_id: 2,
        pellet_size_id: 5,
        packing_id: 1,
        pellet_price: 1111,
        mash_price: 750,
      },
      {
        region_id: 2,
        item_id: 4,
        sku_id: 2,
        pellet_size_id: 1,
        packing_id: 1,
        pellet_price: 1120,
      },
      {
        region_id: 3,
        item_id: 1,
        sku_id: 1,
        pellet_size_id: 2,
        packing_id: 1,
        pellet_price: 810,
        mash_price: 1000,
      },
      {
        region_id: 3,
        item_id: 2,
        sku_id: 2,
        pellet_size_id: 6,
        packing_id: 1,
        pellet_price: 444,
      },
      {
        region_id: 3,
        item_id: 2,
        sku_id: 2,
        pellet_size_id: 2,
        packing_id: 1,
        pellet_price: 884,
        mash_price: 855,
      },
      {
        region_id: 3,
        item_id: 2,
        sku_id: 2,
        pellet_size_id: 3,
        packing_id: 1,
        pellet_price: 2222,
      },
      {
        region_id: 3,
        item_id: 3,
        sku_id: 2,
        pellet_size_id: 2,
        packing_id: 1,
        pellet_price: 1054,
        mash_price: 750,
      },
      {
        region_id: 3,
        item_id: 4,
        sku_id: 2,
        pellet_size_id: 1,
        packing_id: 1,
        pellet_price: 1120,
        mash_price: 125,
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dataInsertion;
