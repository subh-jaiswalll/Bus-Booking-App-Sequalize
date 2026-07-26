
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

module.exports = User;







// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/db.js");

// const User = sequelize.define("User", {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },

//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },

//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//     },

//     phone: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// });

// module.exports = User;