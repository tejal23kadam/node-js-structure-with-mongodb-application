const express = require('express')
const upload = require('../utility/upload')
const router = express.Router();
const { checkConn, addUser, updateUser, getAllUser, deteleUser, validateUser, emailVerify,forgetPassword,resetPassword } = require('../controllers/user_controller')

router.get('/conncheck', checkConn);
router.post('/addUser', upload.array("image"), addUser);
router.put('/updateUSer/:id', updateUser)
router.get('/allUSer', getAllUser)
router.delete('/deleteUser/:id', deteleUser)
router.post('/validateUser', validateUser);
router.get('/verify-email/:token', emailVerify);
router.post('/forget-password', forgetPassword);
router.post('/reset-password/:token', resetPassword);
module.exports = router