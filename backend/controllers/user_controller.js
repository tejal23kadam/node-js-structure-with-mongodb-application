const express = require('express');
const mongoose = require('mongoose');
const userModel = mongoose.model('user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../utility/config');
const { sendmail } = require('../utility/nodemailer');

const checkConn = (req, res) => {
    res.status(200).json({ message: 'connection done successfully' })
}

const addUser = async (req, res) => {
    try {
        const data = req.body;
        const filename = req.files.map(file => {
            const data = {}
            data['name'] = file.filename
            data['path'] = file.path  
            return data
        },{})
          if (!data) {
            return res.status(404).json({ status: true, data: { message: " data can not be null or empty " } })
        }
        console.log(data.password)
        const hashPassword = await bcrypt.hash(data.password, 10);
        const newUser = new userModel({
            name: data.name,
            image:filename,
            email: data.email,
            password: hashPassword,
            userType: data.userType
        });

        await newUser.save();
        await sendmail(data.email, "welcome to gmail", "hello sir", '<a href="www.google.com">google.com</a>')
        return res.status(200).json({ status: true, data: { message: "data added successfully" } })
    }
    catch (error) {
        console.error(error);
        return res.status(501).json({ staus: false, data: { message: 'Internal server error', data: error } })
    }
}

const updateUser = async (req, res) => {
    try {
        const UserId = req.params.id;
        const data = req.body;
        const updateUser = await userModel.findByIdAndUpdate(UserId, data, { new: true });

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

const getAllUser = async (req, res) => {
    try {

        const getUser = await userModel.find();

        if (!getUser) {
            return res.status(404).json({ staus: false, data: { message: "no User found" } })
        }

        return res.status(200).json({ staus: true, data: { message: "all User fetched", data: getUser } })
    }
    catch (error) {
        console.error(error);
        return res.staus(501).json({ staus: false, data: { message: "internal server error", data: error } })

    }
}

const deteleUser = async (req, res) => {
    try {
        const UserId = req.params.id;

        if (!UserId) {
            return res.status(404).json({ staus: false, data: { message: "User id can not be null or empty" } })
        }
        await userModel.findByIdAndDelete(UserId);

        return res.status(200).json({ status: true, data: { message: 'user deleted successfully' } })
    }
    catch (error) {
        console.log(error);
        return res.status(501).json({ status: false, data: { messge: "internal server error", data: error } })
    }
}

const validateUser = async (req, res) => {
    try {
        const data = req.body;
        console.log("data = ", data);
        // console.log(data);
        const User = await userModel.findOne({ email: data.email });
        console.log("User", User);
        if (!User.email) {
            return res.status(200).json({ staus: false, data: { message: "your id is not registered" } })
        }
        if (!data.password) {
            return res.status(200).json({ staus: false, data: { message: "please enter password" } })
        }
        const passwordMatch = await bcrypt.compare(data.password, User.password)

        const token = jwt.sign({ user_id: User.id }, JWT_SECRET)
        if (passwordMatch) {

            return res.status(200).json({ status: true, data: { message: 'Login User successfully', token: token, user: User } })
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

module.exports = { checkConn, addUser, updateUser, getAllUser, deteleUser, validateUser }

