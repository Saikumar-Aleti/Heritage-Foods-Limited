const SKU = require("../models/SKUsModel");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllSKUs = async (req, res) => {
  const skus = await SKU.findAll();
  res.status(StatusCodes.OK).json(skus);
};

const createSKU = async (req, res) => {
  const { sku_kgs } = req.body;
  if (!sku_kgs) {
    throw new BadRequestError("Please provide a SKU!");
  }
  const SKUAlreadyExists = await SKU.findOne({
    where: { sku_kgs: req.body.sku_kgs },
  });
  if (SKUAlreadyExists) {
    throw new BadRequestError("SKU is already available!");
  }
  const sku = await SKU.create(req.body);
  res.status(StatusCodes.CREATED).json(sku);
};

const getSingleSKU = async (req, res) => {
  const sku = await SKU.findOne({
    where: { sku_id: Number(req.params.id) },
  });
  if (!sku) {
    throw new NotFoundError(
      `No SKU found with the id : ${Number(req.params.id)} `
    );
  }
  res.status(StatusCodes.OK).json(sku);
};

const updateSingleSKU = async (req, res) => {
  const { sku_kgs } = req.body;
  if (!sku_kgs) {
    throw new BadRequestError("Please provide a SKU!");
  }
  const SKUAlreadyExists = await SKU.findOne({
    where: { sku_kgs: req.body.sku_kgs },
  });
  if (SKUAlreadyExists) {
    throw new BadRequestError("SKU is already available!");
  }
  const sku = await SKU.update(req.body, {
    where: { sku_id: Number(req.params.id) },
  });
  if (!sku) {
    throw new NotFoundError(
      `No SKU found with the id : ${Number(req.params.id)} `
    );
  }
  res.status(StatusCodes.OK).json({ msg: "SKU is updated successfully!" });
};

const deleteSingleSKU = async (req, res) => {
  const sku = await SKU.destroy({
    where: { sku_id: Number(req.params.id) },
  });
  if (!sku) {
    throw new NotFoundError(
      `No SKU found with the id : ${Number(req.params.id)}`
    );
  }
  res.status(StatusCodes.OK).json({ msg: "SKU deleted successfully!" });
};

module.exports = {
  getAllSKUs,
  createSKU,
  getSingleSKU,
  updateSingleSKU,
  deleteSingleSKU,
};
