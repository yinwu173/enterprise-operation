const { Schema, model } = require('mongoose');

// schema to create a User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: function(value) {
                    // Email address validation with regex
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                },
                message: 'Please enter a valid email address',
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
);

// Returns the length of the user's `friends` array field on query
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Create User model from userSchema
const User = model('User', userSchema);


module.exports = User;