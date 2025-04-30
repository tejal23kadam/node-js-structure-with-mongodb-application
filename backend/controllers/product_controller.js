const express = require('express');
const mongoose = require('mongoose');
const productModel = mongoose.model('product');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { JWT_SECRET } = require('../utility/config')


const checkConnProduct = (req, res) => {
    res.status(200).json({ message: 'product connection done successfully' })
}

const addProduct = async (req, res) => {
    try {
        const data = req.body;
        const filename = req.files.map(file => {
            const data = {}
            data['name'] = file.filename
            data['path'] = file.path  
            return data
        },{})
        
        console.log("file name array is "+ JSON.stringify(filename))

        if (!data) {
            return res.status(404).json({ status: true, data: { message: " data can not be null or empty " } })
        }
        const newProduct = new productModel({
            productId:data.productId,
            title: data.title,
            price: data.price,
            image: filename,
            description: data.description,
            brand: data.brand,
            modal: data.modal,
            color: data.color,
            category: data.category,
            discount: 0
        });

        await newProduct.save();
        return res.status(200).json({ status: true, data: { message: "product data added successfully", data: newProduct } })
    }
    catch (error) {
        console.error(error);
        return res.status(501).json({ staus: false, data: { message: 'Internal server error', data: error } })
    }
}



const authVerify = async (req, res) => {
    return res.status(200).json({ status: true, data: { message: "user verified", data: req.user } });
}

module.exports = { checkConnProduct, addProduct, authVerify }