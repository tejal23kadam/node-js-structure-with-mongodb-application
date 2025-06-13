const express = require('express');
const mongoose = require('mongoose');
const productModel = mongoose.model('product');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const uploadToCloudinary = require('../utility/uploadCloudinary')
const { JWT_SECRET } = require('../utility/config')


const checkConnProduct = (req, res) => {
    res.status(200).json({ message: 'product connection done successfully' })
}

const addProduct = async (req, res) => {
    let imageUrlList = [];
    try {
        for (let i = 0; i < req.files.length; i++) {
            let locaFilePath = req.files[i].path;
            let localFileName = path.parse(req.files[i].filename).name;
            console.log("local file name  "  +localFileName )
            // Upload the local image to Cloudinary
            // and get image url as response

            let result = await uploadToCloudinary(locaFilePath, localFileName);
            imageUrlList.push(result);
            console.log("image url list " + JSON.stringify(imageUrlList))
        }
        const data = req.body;
        const filename = imageUrlList.map(file => {
            const data = {}
            data['name'] = file.filename
            data['path'] = file.url
            return data
        }, {})

        if (!data) {
            return res.status(404).json({ status: true, data: { message: " data can not be null or empty " } })
        }
        const newProduct = new productModel({
            productId: data.productId,
            title: data.title,
            price: data.price,
            image: filename,
            description: data.description,
            brand: data.brand,
            modal: data.modal,
            color: data.color,
            category: data.category,
            discount: data.discount
        });

        await newProduct.save();
        return res.status(200).json({ status: true, data: { message: "product data added successfully", data: newProduct } })
    }
    catch (error) {
        console.error(error);
        return res.status(501).json({ staus: false, data: { message: 'Internal server error', data: error } })
    }
}

const getAllProduct = async (req, res) => {
    try {

        const getProduct = await productModel.find();

        if (!getProduct) {
            return res.status(404).json({ staus: false, data: { message: "no product found" } })
        }

        return res.status(200).json({ staus: true, data: { message: "all product are fetched", data: getProduct } })
    }
    catch (error) {
        console.error(error);
        return res.status(501).json({ staus: false, data: { message: "internal server error", data: error } })

    }
}



const authVerify = async (req, res) => {
    return res.status(200).json({ status: true, data: { message: "user verified", data: req.user } });
}

module.exports = { checkConnProduct, addProduct,getAllProduct, authVerify }