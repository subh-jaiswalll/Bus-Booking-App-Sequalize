const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Bus = sequelize.define("Bus", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    busName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    source: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    destination: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Bus;