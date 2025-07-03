const { JWT_SECRET } = require('../utility/config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const userModel = mongoose.model('user')

const Auth = async (req, res, next) => {
    try {
        // const token = req.header('Authorization');

        // if (!token) {
        //     return res.status(401).json({ message: "No token provided" });
        // }

        // const verified = jwt.verify(token, JWT_SECRET);

        // if (!verified) {
        //     return res.status(401).json({ message: "Unauthorized" });
        // }


        const authHeader = req.header("Authorization");
        if (!authHeader) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = authHeader.split(" ")[1]; // Extract after "Bearer"
        if (!token) {
            return res.status(401).json({ message: "Token missing or malformed" });
        }
        const verified = jwt.verify(token, JWT_SECRET);
        const user = await userModel.findById(verified.user_id).select("-password");
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