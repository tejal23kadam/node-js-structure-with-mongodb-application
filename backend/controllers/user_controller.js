const express = require('express');
const mongoose = require('mongoose');
const userModel = mongoose.model('user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path');
const { JWT_SECRET } = require('../utility/config');
const { sendmail } = require('../utility/nodemailer');
const uploadToCloudinary = require('../utility/uploadCloudinary')
const checkConn = (req, res) => {
    res.status(200).json({ message: 'connection done successfully' })
}

const addUser = async (req, res) => {

    let imageUrlList = [];
    try {
        for (let i = 0; i < req.files.length; i++) {
            let locaFilePath = req.files[i].path;
            let localFileName = path.parse(req.files[i].filename).name;
            console.log("local file name  " + localFileName)
            // Upload the local image to Cloudinary
            // and get image url as response

            let result = await uploadToCloudinary(locaFilePath, localFileName, 'userImg');
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
            return res.status(404).json({ status: true, data: { message: " user can not be null or empty " } })
        }
        const hashPassword = await bcrypt.hash(data.password, 10);
        const newUser = new userModel({
            name: data.name,
            image: filename,
            email: data.email,
            password: hashPassword,
            userType: data.userType
        });

        const savedUser = await newUser.save();
        const token = jwt.sign({ userId: savedUser._id }, JWT_SECRET, { expiresIn: '1d' });
        const verifyLink = `http://localhost:3000/verify-email/${token}`;

        await sendmail(
            data.email,
            'Verify Your Email',
            'Verification Required',
            `<p>Click the link to verify your email: <a href="${verifyLink}">${verifyLink}</a></p>`
        );
        console.log('✅ Email sent successfully');

        return res.status(200).json({ status: true, data: { message: "user added successfully" } })
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
            return res.status(404).json({ staus: true, data: { message: "User id is not found" } })
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
        return res.status(501).json({ staus: false, data: { message: "internal server error", data: error } })

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

        console.log("data for the user : " + JSON.stringify(data));
        const User = await userModel.findOne({ email: data.email });
        
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

const emailVerify = async (req, res) => {
    const { token } = req.params;

    if (!token) {
        return res.status(400).json({ message: "Token missing from URL." });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = decoded.userId;
        
        const user = await userModel.findByIdAndUpdate(userId, { isVerified: true }, { new: true });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ message: "Email verified successfully." });
    } catch (error) {
        res.status(400).json({ message: "Invalid or expired token." });
    }


}


const forgetPassword = async (req, res) => {
    const { email } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '15m' });

    const resetLink = `http://localhost:3000/reset-password/${token}`;

    await sendmail(
        email,
        "Password Reset",
        `<p>Click <a href="${resetLink}">here</a> to reset your password</p>`
    );

    res.json({ message: 'Reset link sent to email' });
};

const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await userModel.findById(decoded.id);

        user.password = await bcrypt.hash(password, 10);
        await user.save();

        res.json({ message: 'Password reset successful' });
    } catch (err) {
        res.status(404).json({ message: 'Invalid or expired token' });
    }
}
module.exports = { checkConn, addUser, updateUser, getAllUser, deteleUser, validateUser, emailVerify,forgetPassword,resetPassword }

