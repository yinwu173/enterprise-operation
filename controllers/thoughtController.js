const { User, Thought } = require('../models');
const { Types } = require('mongoose');

const thoughtController = {
    async getAllThoughts(req, res) {
        try {
            const thought = await Thought.find();

            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async getSingleThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');

            if (thought) {
                return res.status(404).json({ message: 'No thought with that ID' })
            }

            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

};


module.exports = thoughtController;