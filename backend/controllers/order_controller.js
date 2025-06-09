const express = require('express');
//const mongoose = require('mongoose');
//const OrderModel = mongoose.model('orders');
const OrderModel = require('../models/order_model');

const checkConnOrder = (req, res) => {
    res.status(200).json({ message: 'orders connection done successfully' });
};

const addOrder = async (req, res) => {
    try {
        const data = req.body;
        const updateUser = await OrderModel.find({ "userId": data.userId })
        console.log("update user " + updateUser);
        if (updateUser == "") {
            if (!data) {
                return res.status(400).json({ status: false, data: { message: "Order data cannot be null or empty" } });
            }

            const newOrder = new OrderModel({
                userId: data.userId,
                name: data.name,
                phoneNo: data.phoneNo,
                address: data.address,
                city: data.city,
                state: data.state,
                zip: data.zip,
                products: data.products
            });

            await newOrder.save();
            return res.status(200).json({
                status: true,
                data: { message: "Order data added successfully", data: newOrder }
            });
        }
        else{
            updateOrder(req,res);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            data: { message: 'Internal server error', error: error.message }
        });
    }
};

const updateOrder = async (req, res) => {
    try {
        const UserId = req.params.id;
        const data = req.body;
        const updateUser = await OrderModel.findByIdAndUpdate(UserId, data, { new: true });

        if (!updateUser) {
            return res.staus(404).json({ staus: true, data: { message: "User id is not found" } })
        }
        return res.status(200).json({ status: true, data: { message: 'User Updated successfully ', data: updateUser } })
    }
    catch (error) {
        console.error(error);
        return res.status(501).json({ staus: false, data: { message: 'internal server error', data: error } })
    }
}



const getAllOrder = async (req, res) => {
    try {
        const getOrder = await OrderModel.find();

        if (!getOrder || getOrder.length === 0) {
            return res.status(404).json({
                status: false,
                data: { message: "No orders found" }
            });
        }

        return res.status(200).json({
            status: true,
            data: { message: "All orders fetched", data: getOrder }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            data: { message: "Internal server error", error: error.message }
        });
    }
};

module.exports = { checkConnOrder, addOrder, updateOrder, getAllOrder };
