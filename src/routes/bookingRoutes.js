const express = require("express");

const router = express.Router();

const bookingController = require("../controller/bookingController.js");

router.post("/", bookingController.createBooking);

module.exports = router;