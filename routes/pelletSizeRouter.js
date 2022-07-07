const express = require("express");

const {
  getAllPelletSizes,
  createPelletSize,
  getSinglePelletSize,
  updateSinglePelletSize,
  deleteSinglePelletSize,
} = require("../controllers/pelletSizeController");

const router = express.Router();

router.route("/").get(getAllPelletSizes).post(createPelletSize);
router
  .route("/:id")
  .get(getSinglePelletSize)
  .patch(updateSinglePelletSize)
  .delete(deleteSinglePelletSize);

module.exports = router;
