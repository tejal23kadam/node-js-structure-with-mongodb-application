const express = require('express')
// const mongoose = require('mongoose');
// const OrderModel = mongoose.model('orders');
const OrderModel = require('../models/order_model')
const checkConnOrder = (req, res) => {
    res.status(200).json({ message: 'orders connection done successfully' })
}

const addOrder = async (req, res) => {
    try {
        const data = req.body;
        console.log("data is " + data)
        if (!data) {
            return res.status(404).json({ status: true, data: { message: " Order data can not be null or empty " } })
        }
        const newOrder = new OrderModel({
            user: data.id,
            name: data.name,
            phoneNo: data.phoneNo,
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip
        });

        await newOrder.save();
        return res.status(200).json({ status: true, data: { message: "Order data added successfully", data: newOrder } })
    }
    catch (error) {
        console.error(error);
        return res.status(501).json({ staus: false, data: { message: 'Internal server error', data: error } })
    }
}

const getAllOrder = async (req, res) => {
    try {

        const getOrder = await OrderModel.find();

        if (!getOrder) {
            return res.status(404).json({ staus: false, data: { message: "no Order found" } })
        }

        return res.status(200).json({ staus: true, data: { message: "all Order fetched", data: getOrder } })
    }
    catch (error) {
        console.error(error);
        return res.staus(501).json({ staus: false, data: { message: "internal server error", data: error } })

    }
}
module.exports = { checkConnOrder, addOrder, getAllOrder }