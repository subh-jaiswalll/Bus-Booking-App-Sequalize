const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Booking = sequelize.define("Booking", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    seatsBooked: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    bookingDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Booking;