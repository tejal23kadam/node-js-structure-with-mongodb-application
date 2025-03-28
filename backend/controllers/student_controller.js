const express = require('express');
const mongoose = require('mongoose');
const studentModel = mongoose.model('student')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../utility/config');
const { sendmail } = require('../utility/nodemailer');

const checkConn = (req, res) => {
    res.status(200).json({ message: 'connection done successfully' })
}

const addStudent = async (req, res) => {
    try {
        const data = req.body;
        if (!data) {
            return res.status(404).json({ status: true, data: { message: " data can not be null or empty " } })
        }
        console.log(data.password)
        const hashPassword = await bcrypt.hash(data.password, 10);
        const newStudent = new studentModel({ name: data.name, std: data.std, mobile: data.mobile, email: data.email, password: hashPassword,userType: data.userType});

        await newStudent.save();
        await sendmail(data.email,"welcome to gmail","hello sir",'<a href="www.google.com">google.com</a>')
        return res.status(200).json({ status: true, data: { message: "data added successfully" } })
    }
    catch (error) {
        console.error(error);
        return res.status(501).json({ staus: false, data: { message: 'Internal server error', data: error } })
    }
}

const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const data = req.body;
        const updateStudent = await studentModel.findByIdAndUpdate(studentId, data, { new: true });

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

const getAllStudent = async (req, res) => {
    try {

        const getStudent = await studentModel.find();

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

const deteleStudent = async (req, res) => {
    try {
        const studentId = req.params.id;

        if (!studentId) {
            return res.status(404).json({ staus: false, data: { message: "student id can not be null or empty" } })
        }
        await studentModel.findByIdAndDelete(studentId);

        return res.status(200).json({ status: true, data: { message: 'user deleted successfully' } })
    }
    catch (error) {
        console.log(error);
        return res.status(501).json({ status: false, data: { messge: "internal server error", data: error } })
    }
}

const validateStudent = async (req, res) => {
    try {
        const data = req.body;
       // console.log(data);
        const Student = await studentModel.findOne({email:data.email});
        console.log("student", Student);
        if (!Student.email) {
            return res.status(200).json({ staus: false, data: { message: "your id is not registered" } })
        }
        if (!data.password) {
            return res.status(200).json({ staus: false, data: { message: "please enter password" } })
        }
        const passwordMatch = await bcrypt.compare(data.password, Student.password)

        const token = jwt.sign({user_id:Student.id}, JWT_SECRET)
        if (passwordMatch) {
            
            return res.status(200).json({ status: true, data: { message: 'Login student successfully', token:token ,user:Student} })
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

module.exports = { checkConn, addStudent, updateStudent, getAllStudent, deteleStudent, validateStudent }

