const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: [{
        name: { type: String, required: true },
        path: { type: String, required: true }

    }],
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema)
