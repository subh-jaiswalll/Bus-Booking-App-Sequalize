const express = require("express");
const sequelize = require("./src/config/db.js");

const userRoutes = require("./src/routes/userRoutes.js");
const busRoutes = require("./src/routes/busRoutes.js");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/buses", busRoutes);

sequelize.sync()
.then(() => {

    console.log("Database Connected");

    app.listen(3000, () => {

        console.log("Server Running");

    });

})
.catch(err => console.log(err));