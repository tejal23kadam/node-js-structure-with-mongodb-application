const express = require('express');
const mongoose = require('mongoose');
const productModel = mongoose.model('product');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../utility/config')


const checkConnemp = (req, res) => {
    res.status(200).json({ message: 'connection done successfully' })
}

const addProduct = async (req, res) => {
    try {
        const data = req.body;
        if (!data) {
            return res.status(404).json({ status: true, data: { message: " data can not be null or empty " } })
        }
        const newProduct = new productModel({
            title: data.title,
            price: data.price,
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


const updateEmployee = async (req, res) => {
    try {
        const studentId = req.params.id;
        const data = req.body;
        const updateStudent = await productModel.findByIdAndUpdate(studentId, data, { new: true });

        if (!updateStudent) {
            return res.staus(404).json({ staus: true, data: { message: "student id is not found" } })
        }
        return res.status(200).json({ status: true, data: { message: 'student Updated successfully ', data: updateStudent } })
    }
    catch (error) {
        console.error(error);
        return res.status(501).json({ staus: false, data: { message: 'internal server error', data: error } })
    }
}

const getAllEmployee = async (req, res) => {
    try {

        const getStudent = await productModel.find();

        if (!getStudent) {
            return res.status(404).json({ staus: false, data: { message: "no student found" } })
        }

        return res.status(200).json({ staus: true, data: { message: "all student fetched", data: getStudent } })
    }
    catch (error) {
        console.error(error);
        return res.staus(501).json({ staus: false, data: { message: "internal server error", data: error } })

    }
}

const deteleEmployee = async (req, res) => {
    try {
        const studentId = req.params.id;

        if (!studentId) {
            return res.status(404).json({ staus: false, data: { message: "student id can not be null or empty" } })
        }
        await productModel.findByIdAndDelete(studentId);

        return res.status(200).json({ status: true, data: { message: 'user deleted successfully' } })
    }
    catch (error) {
        console.log(error);
        return res.status(501).json({ status: false, data: { messge: "internal server error", data: error } })
    }
}

const validatEmployee = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const Student = await productModel.findOne({ email: data.email });
        console.log("student", Student);
        if (!Student.email) {
            return res.status(200).json({ staus: false, data: { message: "your id is not registered" } })
        }
        if (!data.password) {
            return res.status(200).json({ staus: false, data: { message: "please enter password" } })
        }
        const passwordMatch = await bcrypt.compare(data.password, Student.password)

        const token = jwt.sign({ user_id: Student.id }, JWT_SECRET)
        if (passwordMatch) {

            return res.status(200).json({ status: true, data: { message: 'Login student successfully', token: token, user: Student } })
        }
        else {
            return res.status(200).json({ status: false, data: { message: 'Incorrect Password ' } })
        }
    }
    catch (error) {
        console.log(error);
        return res.status(501).json({ status: false, data: { messge: "internal server error", data: error } })
    }
}

const authVerify = async (req, res) => {
    return res.status(200).json({ status: true, data: { message: "user verified", data: req.user } });
}

module.exports = { checkConnemp, addProduct, updateEmployee, getAllEmployee, deteleEmployee, validatEmployee, authVerify }