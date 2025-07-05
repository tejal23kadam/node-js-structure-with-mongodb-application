const express = require('express');
const mongoose = require('mongoose');
//const OrderModel = mongoose.model('orders');
const OrderModel = require('../models/order_model');
const { ObjectId } = require('mongoose').Types;



const checkConnOrder = (req, res) => {
    res.status(200).json({ message: 'orders connection done successfully' });
};


const addOrder = async (req, res) => {
    try {
        const data = req.body;
        const updateUser = await OrderModel.findOne({ "userId": data.userId })

        if (updateUser) {
            updateOrder(req, res);
        }
        else {
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

        const UserId = req.body.userId;
        const data = {
            $addToSet: { products: { $each: req.body.products } }
        };

        const updateUser = await OrderModel.findOneAndUpdate({ userId: UserId }, data, { new: true });

        if (!updateUser) {
            return res.status(404).json({ staus: true, data: { message: "order id is not found" } })
        }
        return res.status(200).json({ status: true, data: { message: 'order Updated successfully ', data: updateUser } })
    }
    catch (error) {
        console.error(error);
        return res.status(501).json({ staus: false, data: { message: 'internal server error', data: error } })
    }
}

const getUserOrderDetail = async (req, res) => {
    const userId = req.query.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ status: false, message: "Invalid user ID" });
    }

    try {
        const orders = await OrderModel.find({ userId })
            .populate('products.product') // joins product details
            .populate('userId', 'name email') // joins user details
            .sort({ createdAt: -1 })
            .lean();

        if (!orders || orders.length === 0) {
            return res.status(404).json({ status: false, message: 'No orders found' });
        }

        const formatted = orders.map(order => ({
            _id: order._id,
            createdAt: order.createdAt,
            phoneNo: order.phoneNo,
            address: order.address,
            city: order.city,
            state: order.state,
            zip: order.zip,
            userDetails: {
                name: order.userId.name,
                email: order.userId.email,
            },
            products: order.products
                .filter(p => p.product !== null)
                .map(p => ({
                    product: p.product._id,
                    title: p.product.title,
                    image: p.product.image,
                    price: p.product.price,
                    description: p.product.description,
                    brand: p.product.brand,
                    color: p.product.color,
                    category: p.product.category,
                    discount: p.product.discount,
                    quantity: p.quantity,
                    totalPrice: p.quantity * p.product.price,
                }))
        }));

        return res.status(200).json({ status: true, message: "Orders retrieved", data: formatted });

    } catch (error) {
        console.error("Error in getUserOrderDetail:", error);
        return res.status(500).json({ status: false, message: "Internal server error", error });
    }
};


const getUserLastOrder = async (req, res) => {
    try {
        const userId = req.query.userId;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid userId' });
        }

        const lastOrder = await OrderModel.findOne({ userId: userId })
            .sort({ createdAt: -1 }) // most recent
            .limit(1);

        if (!lastOrder) {
            return res.status(404).json({ message: 'No orders found for this user.' });
        }

        res.status(200).json({ success: true, data: lastOrder });
    } catch (error) {
        console.error("Error fetching last order:", error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

module.exports = { checkConnOrder, addOrder, updateOrder, getUserOrderDetail, getUserLastOrder };
