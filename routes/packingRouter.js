const express = require("express");

const {
  getAllPackingTypes,
  createPackingType,
  getSinglePackingType,
  updateSinglePackingType,
  deleteSinglePackingType,
} = require("../controllers/packingController");

const router = express.Router();

router.route("/").get(getAllPackingTypes).post(createPackingType);
router
  .route("/:id")
  .get(getSinglePackingType)
  .patch(updateSinglePackingType)
  .delete(deleteSinglePackingType);

module.exports = router;
