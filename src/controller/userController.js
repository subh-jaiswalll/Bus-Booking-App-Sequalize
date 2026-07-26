const User = require("../model/users.js");
const Booking = require("../model/booking.js");
const Bus = require("../model/bus.js");

const getUserBookings = async (req, res) => {
    const user = await User.findByPk(req.params.id, {
        include: {
            model: Booking,
            include: [Bus]
        }
    });

    res.json(user);
};

module.exports = {
    getUserBookings
};

// const User = require("../model/users.js");

// const addUser = async (req, res) => {

//     try {

//         const user = await User.create(req.body);

//         res.status(201).json(user);

//     } catch (err) {

//         res.status(500).json(err.message);

//     }

// };

// const getUsers = async (req, res) => {

//     try {

//         const users = await User.findAll();

//         res.json(users);

//     } catch (err) {

//         res.status(500).json(err.message);

//     }

// };

// module.exports = {
//     addUser,
//     getUsers,
// }