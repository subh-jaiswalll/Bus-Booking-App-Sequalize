const User = require("../model/users.js");

const addUser = async (req, res) => {

    try {

        const user = await User.create(req.body);

        res.status(201).json(user);

    } catch (err) {

        res.status(500).json(err.message);

    }

};

const getUsers = async (req, res) => {

    try {

        const users = await User.findAll();

        res.json(users);

    } catch (err) {

        res.status(500).json(err.message);

    }

};

module.exports = {
    addUser,
    getUsers,
}