const PelletSize = require("../models/PelletSizeModel");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllPelletSizes = async (req, res) => {
  const pelletSizes = await PelletSize.findAll();
  res.status(StatusCodes.OK).json(pelletSizes);
};

const createPelletSize = async (req, res) => {
  const { pellet_size } = req.body;
  if (!pellet_size) {
    throw new BadRequestError("Please provide a pellet size!");
  }
  const pelletSizeAlreadyExists = await PelletSize.findOne({
    where: { pellet_size: req.body.pellet_size },
  });
  if (pelletSizeAlreadyExists) {
    throw new BadRequestError("Pellet size is already available!");
  }
  const pelletSize = await PelletSize.create(req.body);
  res.status(StatusCodes.CREATED).json(pelletSize);
};

const getSinglePelletSize = async (req, res) => {
  const pelletSize = await PelletSize.findOne({
    where: { pellet_size_id: Number(req.params.id) },
  });
  if (!pelletSize) {
    throw new NotFoundError(
      `No pellet size found with the id : ${Number(req.params.id)} `
    );
  }
  res.status(StatusCodes.OK).json(pelletSize);
};

const updateSinglePelletSize = async (req, res) => {
  const { pellet_size } = req.body;
  if (!pellet_size) {
    throw new BadRequestError("Please provide a pellet size!");
  }
  const pelletSizeAlreadyExists = await PelletSize.findOne({
    where: { pellet_size: req.body.pellet_size },
  });
  if (pelletSizeAlreadyExists) {
    throw new BadRequestError("Pellet size is already available!");
  }
  const pelletSize = await PelletSize.update(req.body, {
    where: { pellet_size_id: Number(req.params.id) },
  });
  if (!pelletSize) {
    throw new NotFoundError(
      `No pellet size found with the id : ${Number(req.params.id)} `
    );
  }
  res.status(StatusCodes.OK).json({ msg: "Pellet size updated successfully!" });
};

const deleteSinglePelletSize = async (req, res) => {
  const pelletSize = await PelletSize.destroy({
    where: { pellet_size_id: Number(req.params.id) },
  });
  if (!pelletSize) {
    throw new NotFoundError(
      `No pellet size found with the id : ${Number(req.params.id)}`
    );
  }
  res.status(StatusCodes.OK).json({ msg: "Pellet size deleted successfully!" });
};

module.exports = {
  getAllPelletSizes,
  createPelletSize,
  getSinglePelletSize,
  updateSinglePelletSize,
  deleteSinglePelletSize,
};
