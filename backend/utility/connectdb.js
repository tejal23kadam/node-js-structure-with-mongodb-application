const mongoose = require('mongoose');
const { MONGODB_URL } = require('./config')
const { user } = require('../models/user_model')
const { employee } = require('../models/employee_model')
const { product } = require('../models/product_model')

const connectdb = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        user;
        employee;
        product;
        console.log("connection done successfully");
    }
    catch (error) {
        console.log("failed db connection");
    }
}

module.exports = connectdb