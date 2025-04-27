const { JWT_SECRET } = require('../utility/config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const studentModel = mongoose.model('student')

const Auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization');

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const verified = jwt.verify(token, JWT_SECRET);

        if (!verified) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const user = await studentModel.findById(verified.user_id).select("-password");

        if (user) {
            req.user = user;
            next();
        }
        else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = Auth;