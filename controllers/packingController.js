const Packing = require("../models/PackingModel");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllPackingTypes = async (req, res) => {
  const packingTypes = await Packing.findAll();
  res.status(StatusCodes.OK).json(packingTypes);
};

const createPackingType = async (req, res) => {
  const { packing } = req.body;
  if (!packing) {
    throw new BadRequestError("Please provide a packing type!");
  }
  const packingTypeAlreadyExists = await Packing.findOne({
    where: { packing: req.body.packing },
  });
  if (packingTypeAlreadyExists) {
    throw new BadRequestError("Packing type is already available!");
  }
  const packingType = await Packing.create(req.body);
  res.status(StatusCodes.CREATED).json(packingType);
};

const getSinglePackingType = async (req, res) => {
  const packingType = await Packing.findOne({
    where: { packing_id: Number(req.params.id) },
  });
  if (!packingType) {
    throw new NotFoundError(
      `No packing type found with the id : ${Number(req.params.id)} `
    );
  }
  res.status(StatusCodes.OK).json(packingType);
};

const updateSinglePackingType = async (req, res) => {
  const { packing } = req.body;
  if (!packing) {
    throw new BadRequestError("Please provide a packing type!");
  }
  const packingTypeAlreadyExists = await Packing.findOne({
    where: { packing: req.body.packing },
  });
  if (packingTypeAlreadyExists) {
    throw new BadRequestError("Packing type is already available!");
  }
  const packingType = await Packing.update(req.body, {
    where: { packing_id: Number(req.params.id) },
  });
  if (!packingType) {
    throw new NotFoundError(
      `No packing type found with the id : ${Number(req.params.id)} `
    );
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: "Packing type updated successfully!" });
};

const deleteSinglePackingType = async (req, res) => {
  const packingType = await Packing.destroy({
    where: { packing_id: Number(req.params.id) },
  });
  if (!packingType) {
    throw new NotFoundError(
      `No packing type found with the id : ${Number(req.params.id)}`
    );
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: "Packing type deleted successfully!" });
};

module.exports = {
  getAllPackingTypes,
  createPackingType,
  getSinglePackingType,
  updateSinglePackingType,
  deleteSinglePackingType,
};
