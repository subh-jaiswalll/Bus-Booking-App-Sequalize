const express = require("express");
const sequelize = require("./src/config/db.js");

const userRoutes = require("./src/routes/userRoutes.js");
const busRoutes = require("./src/routes/busRoutes.js");
const bookingRoutes = require('./src/routes/bookingRoutes.js')
const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/buses", busRoutes);
app.use("/bookings", bookingRoutes);

const User = require("./src/model/users.js");
const Bus = require("./src/model/bus.js");
const Booking = require("./src/model/booking.js");

// User ↔ Booking
User.hasMany(Booking, {
    foreignKey: "userId"
});

Booking.belongsTo(User, {
    foreignKey: "userId"
});

// Bus ↔ Booking
Bus.hasMany(Booking, {
    foreignKey: "busId"
});

Booking.belongsTo(Bus, {
    foreignKey: "busId"
});

sequelize.sync()
.then(() => {

    console.log("Database Connected");

    app.listen(3000, () => {

        console.log("Server Running");

    });

})
.catch(err => console.log(err));