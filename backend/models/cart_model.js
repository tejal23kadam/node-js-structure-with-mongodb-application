const mongoose = require('mongoose');

const newCart = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product'
            },
            quantity: Number,           
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('cart', newCart);
