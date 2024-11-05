const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //get: timestamp
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);
// Returns the length of the thought's `reactions` array field on query
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Create Thought model from thoughtSchema
const Thought = model('Thought', thoughtSchema);


module.exports = Thought;