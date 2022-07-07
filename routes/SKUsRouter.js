const express = require("express");

const {
  getAllSKUs,
  createSKU,
  getSingleSKU,
  updateSingleSKU,
  deleteSingleSKU,
} = require("../controllers/SKUsController");

const router = express.Router();

router.route("/").get(getAllSKUs).post(createSKU);
router
  .route("/:id")
  .get(getSingleSKU)
  .patch(updateSingleSKU)
  .delete(deleteSingleSKU);

module.exports = router;
