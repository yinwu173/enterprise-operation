const { User, Thought } = require('../models');

module.exports = {
    // Get all Users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();

            res.json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Get a single user
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' })
            }

            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

};