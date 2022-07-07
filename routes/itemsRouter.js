const express = require("express");

const {
  getAllItems,
  createItem,
  getSingleItem,
  updateSingleItem,
  deleteSingleItem,
} = require("../controllers/itemsController");

const router = express.Router();

router.route("/").get(getAllItems).post(createItem);
router
  .route("/:id")
  .get(getSingleItem)
  .patch(updateSingleItem)
  .delete(deleteSingleItem);

module.exports = router;
