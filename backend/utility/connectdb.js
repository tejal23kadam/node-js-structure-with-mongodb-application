const mongoose = require('mongoose');
const { MONGODB_URL } = require('./config')
const { user } = require('../models/user_model')
const { employee } = require('../models/employee_model')
const { product } = require('../models/product_model')
const { category } = require('../models/category_model')

const connectdb = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        user;
        employee;
        product;
        category;
        console.log("connection done successfully");
    }
    catch (error) {
        if (error.name === "MongooseServerSelectionError") {
            console.log("Please check server is running or not")
        }
        else {
            console.log("failed to connect database")
        }
    }
}

module.exports = connectdb