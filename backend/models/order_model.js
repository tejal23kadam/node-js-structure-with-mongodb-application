
const mongoose = require('mongoose');

const newOrder = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
     name: {
        type: String,
        require: true
    },
    phoneNo: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    zip: {
        type: Number,
        require: true
    },
    products: [
        {
            product:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product'
            },
            quantity: Number
        }
    ],
}, { timeStamps: true })
mongoose.model('orders', newOrder)