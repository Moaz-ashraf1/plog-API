const express = require("express");

const router = express.Router();

const {
  getAllPlogs,
  getPlog,
  createPlog,
  updatePlog,
  deletePlog,
} = require("../controllers/plogController");

router.route("/").post(createPlog).get(getAllPlogs);
router.route("/:id").get(getPlog).put(updatePlog).delete(deletePlog);
module.exports = router;
