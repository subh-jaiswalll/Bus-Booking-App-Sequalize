const express = require("express");

const router = express.Router();

const busController = require("../controller/busController.js");

// router.post("/", busController.addBus);

// router.get("/available/:seats", busController.getBusBookings);
router.get("/:id/bookings", busController.getBusBookings);
module.exports = router;