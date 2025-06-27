const express = require('express');
const mongoose = require('mongoose');

const cartModel = require('../models/cart_model');
const { ObjectId } = require('mongoose').Types;



const checkConnCart = (req, res) => {
    res.status(200).json({ message: 'orders connection done successfully' });
};


const addCart = async (req, res) => {
    try {
        const data = req.body;
        const updateUser = await cartModel.findOne({ "userId": data.userId })

        if (updateUser) {
            updateCart(req, res);
        }
        else {
            if (!data) {
                return res.status(400).json({ status: false, data: { message: "Order data cannot be null or empty" } });
            }

            const newOrder = new cartModel({
                userId: data.userId,
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

const updateCart = async (req, res) => {
    try {
        const UserId = req.body.userId;

        const data1 = req.body;
        const data = {
            $addToSet: { products: { $each: req.body.products } }
        };

        const updateUser = await cartModel.findOneAndUpdate({ userId: UserId }, data, { new: true });

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

const getUserCartDetail = async (req, res) => {
    const userId = req.query.userId;
    const userObjectId = new mongoose.Types.ObjectId(userId);

    try {
        const products = await cartModel.findOne({ userId: userObjectId }).populate('products.product');

     //   console.log("products " + products)

        return res.status(200).json({ status: true, data: { message: "all data get", data: products } })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, data: { message: "Internal server error", error: error } })
    }
};

const removeProductFromCart = async (req, res) => {
    const { userId, productId } = req.body;
    console.log("body given " + req.body)

    try {
        const result = await cartModel.findOneAndUpdate(
            { userId: userId },
            { $pull: { products: { product: productId } } },
            { new: true }
        ).populate('products.product');

        res.status(200).json({ message: "Product removed from cart", result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteAllProductFromCart = async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await cartModel.findOneAndDelete({ userId: new mongoose.Types.ObjectId(userId) });

        if (!result) {
            return res.status(404).json({ message: "No cart found for this user" });
        }

        res.status(200).json({ message: "Cart deleted successfully", data: result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};


// In your routes/cart.js or equivalent

const updateProductQuantity = async (req, res) => {
    const { userId, productId, change } = req.body;
    console.log("req.bopdy " + req.body)
 if (!userId || !productId || !change) {
        return res.status(400).json({ message: "Missing parameters" });
    }   ``
    try {
        const updated = await cartModel.updateOne(
            { userId, "products.product": productId },
            { $inc: { "products.$.quantity": change } }
        );

        // remove product if quantity reaches 0
        await cartModel.updateOne(
            { userId },
            { $pull: { products: { quantity: { $lte: 0 } } } }
        );

        res.status(200).json({ message: 'Quantity updated', result: updated });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { checkConnCart, addCart, updateCart, getUserCartDetail, removeProductFromCart, deleteAllProductFromCart,updateProductQuantity };
