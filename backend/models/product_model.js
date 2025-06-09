const mongoose = require('mongoose');

const newProduct = mongoose.Schema({
        productId: {
                type: Number,
                required: true
        },
        title: {
                type: String,
                required: true
        },
        image: [{
                name: { type: String, required: true },
                path: { type: String, required:true }

        }],
        price: {
                type: Number,
                required: true
        },
        description: {
                type: String,
                required: true
        },
        brand: {
                type: String,
                required: true
        },
        model: {
                type: String,
                required: true
        },
        color: {
                type: String,
                required: true
        },
        category: {
                type: String,
                required: true
        },
        discount: {
                type: Number,
                required: true
        }

}, { timestamps: true })
module.exports = mongoose.model('product', newProduct)