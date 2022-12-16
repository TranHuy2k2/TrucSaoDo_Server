const express = require("express");
const ChitietviphamController = require("../controllers/ChitietviphamController");
const router = express.Router();

router.get("/", ChitietviphamController.getByChiTietSCD);
router.post("/add", ChitietviphamController.addChitiet);
router.put("/update", ChitietviphamController.updateChitiet);
module.exports = router;