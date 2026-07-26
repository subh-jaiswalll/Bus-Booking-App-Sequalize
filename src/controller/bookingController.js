const Booking = require("../model/booking.js");

const createBooking = async (req, res) => {

    try {

        const booking = await Booking.create(req.body);

        res.status(201).json(booking);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

}

module.exports ={
    createBooking
};