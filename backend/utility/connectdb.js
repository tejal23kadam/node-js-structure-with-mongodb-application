const mongoose = require('mongoose');
const { MONGODB_URL } = require('./config')
const { student } = require('../models/student_model')
const { employee } = require('../models/employee_model')

const connectdb = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        student;
        employee;
        console.log("connection done successfully");
    }
    catch (error) {
        console.log("failed db connection");
    }
}

module.exports = connectdb