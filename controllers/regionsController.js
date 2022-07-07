const Region = require("../models/RegionsModel");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const getAllRegions = async (req, res) => {
  const regions = await Region.findAll();
  res.status(StatusCodes.OK).json(regions);
};

const createRegion = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    throw new BadRequestError("Please provide a region name!");
  }
  const regionAlreadyExists = await Region.findOne({
    where: { name: req.body.name },
  });
  if (regionAlreadyExists) {
    throw new BadRequestError("Region is already available!");
  }
  const region = await Region.create(req.body);
  res.status(StatusCodes.CREATED).json(region);
};

const getSingleRegion = async (req, res) => {
  const region = await Region.findOne({
    where: { region_id: Number(req.params.id) },
  });
  if (!region) {
    throw new NotFoundError(
      `No region found with the id : ${Number(req.params.id)} `
    );
  }
  res.status(StatusCodes.OK).json(region);
};

const updateSingleRegion = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    throw new BadRequestError("Please provide a region name!");
  }
  const regionAlreadyExists = await Region.findOne({
    where: { name: req.body.name },
  });
  if (regionAlreadyExists) {
    throw new BadRequestError("Region with the name is already available!");
  }
  const region = await Region.update(req.body, {
    where: { region_id: Number(req.params.id) },
  });
  if (!region) {
    throw new NotFoundError(
      `No region found with the id : ${Number(req.params.id)} `
    );
  }
  res.status(StatusCodes.OK).json({ msg: "Region updated successfully!" });
};

const deleteSingleRegion = async (req, res) => {
  const region = await Region.destroy({
    where: { region_id: Number(req.params.id) },
  });
  if (!region) {
    throw new NotFoundError(
      `No region found with the id : ${Number(req.params.id)}`
    );
  }
  res.status(StatusCodes.OK).json({ msg: "Region deleted successfully!" });
};

module.exports = {
  getAllRegions,
  createRegion,
  getSingleRegion,
  updateSingleRegion,
  deleteSingleRegion,
};
