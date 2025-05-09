const mongoose = require('mongoose');

const newCategory = mongoose.Schema({
    catName: {
        type: String,
        require: true
    },
    catRemark: {
        type: String,
        require: true
    }
    

}, { timeStamps: true })
mongoose.model('category', newCategory)