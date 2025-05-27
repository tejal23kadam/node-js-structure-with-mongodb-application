const mongoose = require('mongoose');

const newProduct = mongoose.Schema({
        productId: {
                type: Number,
                require: true
        },
        title: {
                type: String,
                require: true
        },
        image: [{
                name: { type: String, require: true },
                path: { type: String, require:true }

        }],
        price: {
                type: Number,
                require: true
        },
        description: {
                type: String,
                require: true
        },
        brand: {
                type: String,
                require: true
        },
        model: {
                type: String,
                require: true
        },
        color: {
                type: String,
                require: true
        },
        category: {
                type: String,
                require: true
        },
        discount: {
                type: Number,
                require: true
        }

}, { timeStamps: true })
mongoose.model('product', newProduct)