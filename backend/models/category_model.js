const mongoose = require('mongoose');

const newCategory = mongoose.Schema({
    catName: {
        type: String,
        required: true
    },
    catRemark: {
        type: String,
        required: true
    }
    

}, { timestamps: true })
module.exports = mongoose.model('category', newCategory)