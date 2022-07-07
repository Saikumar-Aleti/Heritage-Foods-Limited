const express = require("express");

const {
  getAllRegions,
  createRegion,
  getSingleRegion,
  updateSingleRegion,
  deleteSingleRegion,
} = require("../controllers/regionsController");

const router = express.Router();

router.route("/").get(getAllRegions).post(createRegion);
router
  .route("/:id")
  .get(getSingleRegion)
  .patch(updateSingleRegion)
  .delete(deleteSingleRegion);

module.exports = router;
