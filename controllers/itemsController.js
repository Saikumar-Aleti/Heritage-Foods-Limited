const Item = require("../models/ItemsModel");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const getAllItems = async (req, res) => {
  const items = await Item.findAll();
  res.status(StatusCodes.OK).json(items);
};

const createItem = async (req, res) => {
  const { description } = req.body;
  if (!description) {
    throw new BadRequestError("Please provide item description!");
  }
  const itemAlreadyExists = await Item.findOne({
    where: { description: req.body.description },
  });
  if (itemAlreadyExists) {
    throw new BadRequestError("Item is already available!");
  }
  const item = await Item.create(req.body);
  res.status(StatusCodes.CREATED).json(item);
};

const getSingleItem = async (req, res) => {
  const item = await Item.findOne({
    where: { item_id: Number(req.params.id) },
  });
  if (!item) {
    throw new NotFoundError(
      `No item found with the id : ${Number(req.params.id)} `
    );
  }
  res.status(StatusCodes.OK).json(item);
};

const updateSingleItem = async (req, res) => {
  const { description } = req.body;
  if (!description) {
    throw new BadRequestError("Please provide item description!");
  }
  const itemAlreadyExists = await Item.findOne({
    where: { description: req.body.description },
  });
  if (itemAlreadyExists) {
    throw new BadRequestError(
      "Item with the description is already available!"
    );
  }
  const item = await Item.update(req.body, {
    where: { item_id: Number(req.params.id) },
  });
  if (!item) {
    throw new NotFoundError(
      `No item found with the id : ${Number(req.params.id)} `
    );
  }
  res.status(StatusCodes.OK).json({ msg: "Item updated successfully!" });
};

const deleteSingleItem = async (req, res) => {
  const item = await Item.destroy({
    where: { item_id: Number(req.params.id) },
  });
  if (!item) {
    throw new NotFoundError(
      `No item found with the id : ${Number(req.params.id)}`
    );
  }
  res.status(StatusCodes.OK).json({ msg: "Item deleted successfully!" });
};

module.exports = {
  getAllItems,
  createItem,
  getSingleItem,
  updateSingleItem,
  deleteSingleItem,
};
