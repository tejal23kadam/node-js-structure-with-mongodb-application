const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: [{
        name: { type: String, require: true },
        path: { type: String, require: true }

    }],
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    userType: {
        type: Number,
        require: true
    }
}, { timeStamps: true })

mongoose.model('user', userSchema)
