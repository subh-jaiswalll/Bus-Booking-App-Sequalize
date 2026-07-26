

const Bus = require("../model/bus.js");
const Booking = require("../model/booking.js");
const User = require("../model/users.js");
const getUserBookings = require("./userController.js");

const getBusBookings = async (req, res) => {

    const bus = await Bus.findByPk(req.params.id, {

        include: {

            model: Booking,

            include: [User]

        }

    });

    res.json(bus);

};

module.exports = {
    getBusBookings
}












// const Bus = require("../model/bus.js");
// const { Op } = require("sequelize");

// const addBus = async (req, res) => {

//     try {

//         const bus = await Bus.create(req.body);

//         res.status(201).json(bus);

//     } catch (err) {

//         res.status(500).json(err.message);

//     }

// };

// const getAvailableBus = async (req, res) => {

//     try {

//         const seats = req.params.seats;

//         const buses = await Bus.findAll({

//             where: {
//                 availableSeats: {
//                     [Op.gt]: seats
//                 }
//             }

//         });

//         res.json(buses);

//     } catch (err) {

//         res.status(500).json(err.message);

//     }

// };

// module.exports = {
//     addBus,
//     getAvailableBus
// }