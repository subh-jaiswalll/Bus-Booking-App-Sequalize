const express = require("express");

const router = express.Router();

const busController = require("../controller/busController.js");

router.post("/", busController.addBus);

router.get("/available/:seats", busController.getAvailableBus);

module.exports = router;