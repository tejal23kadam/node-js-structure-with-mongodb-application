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
        
        const data1 = req.body;
        const data = {
            $addToSet : { products: { $each: req.body.products } }
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
    const userObjectId = new mongoose.Types.ObjectId(userId);

    try {
        const products = await OrderModel.aggregate([
            { $match: { userId: userObjectId } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'userDetails',
                },
            },
            { $unwind: '$userDetails' },
            {
                $lookup: {
                    from: 'products',
                    localField: 'products.product',
                    foreignField: '_id',
                    as: 'productDetails',
                },
            },
            {
                $project: {
                    name: 1,
                    phoneNo: 1,
                    address: 1,
                    city: 1,
                    state: 1,
                    zip: 1,
                    userDetails: {
                        name: 1,
                        email: 1,
                    },
                    products: {
                        $map: {
                            input: '$products',
                            as: 'p',
                            in: {
                                $let: {
                                    vars: {
                                        matchedProduct: {
                                            $arrayElemAt: [
                                                {
                                                    $filter: {
                                                        input: '$productDetails',
                                                        cond: { $eq: ['$$this._id', '$$p.product'] },
                                                    },
                                                },
                                                0,
                                            ],
                                        },
                                    },
                                    in: {

                                        product_id: '$$p.product',
                                        title: '$$matchedProduct.title',
                                        image: '$$matchedProduct.image',
                                        price: '$$matchedProduct.price',
                                        description: '$$matchedProduct.description',
                                        brand: '$$matchedProduct.brand',
                                        color: '$$matchedProduct.color',
                                        category: '$$matchedProduct.category',
                                        quantity: '$$p.quantity',
                                        discount: '$$matchedProduct.discount',
                                        totalPrice: { $multiply: ['$$p.quantity', '$$matchedProduct.price'] },
                                    },
                                },
                            },
                        },
                    },
                },
            }
            ,
        ]);

        return res.status(200).json({ status: true, data: { message: "all data get", data: products } })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, data: { message: "Internal server error", error: error } })
    }
};
module.exports = { checkConnOrder, addOrder, updateOrder, getUserOrderDetail };
