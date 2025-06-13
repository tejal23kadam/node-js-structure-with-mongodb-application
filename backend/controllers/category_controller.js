const express = require('express')
const mongoose = require('mongoose');
const categoryModel = mongoose.model('category');

const checkConnCategory = (req, res) => {
    res.status(200).json({ message: 'product connection done successfully' })
}

const addCategory = async (req, res) => {
    try {
        const data = req.body;

        if (!data) {
            return res.status(404).json({ status: true, data: { message: " category data can not be null or empty " } })
        }
        const newCategory = new categoryModel({
            catName: data.name,
            catRemark: data.remark,
        });

        await newCategory.save();
        return res.status(200).json({ status: true, data: { message: "category data added successfully", data: newCategory } })
    }
    catch (error) {
        console.error(error);
        return res.status(501).json({ staus: false, data: { message: 'Internal server error', data: error } })
    }
}

const getAllCategory = async (req, res) => {
    try {

        const getCategory = await categoryModel.find();

        if (!getCategory) {
            return res.status(404).json({ staus: false, data: { message: "no category found" } })
        }

        return res.status(200).json({ staus: true, data: { message: "all category fetched", data: getCategory } })
    }
    catch (error) {
        console.error(error);
        return res.status(501).json({ staus: false, data: { message: "internal server error", data: error } })

    }
}
module.exports = { checkConnCategory, addCategory, getAllCategory }