const mongoose = require('mongoose');

const newEmployee = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
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
mongoose.model('employee', newEmployee)