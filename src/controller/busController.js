const Bus = require("../model/bus.js");
const { Op } = require("sequelize");

const addBus = async (req, res) => {

    try {

        const bus = await Bus.create(req.body);

        res.status(201).json(bus);

    } catch (err) {

        res.status(500).json(err.message);

    }

};

const getAvailableBus = async (req, res) => {

    try {

        const seats = req.params.seats;

        const buses = await Bus.findAll({

            where: {
                availableSeats: {
                    [Op.gt]: seats
                }
            }

        });

        res.json(buses);

    } catch (err) {

        res.status(500).json(err.message);

    }

};

module.exports = {
    addBus,
    getAvailableBus
}