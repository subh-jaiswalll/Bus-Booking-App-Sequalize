const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("bus_bookingSequlize", "root", "Jaiswal@2005", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;