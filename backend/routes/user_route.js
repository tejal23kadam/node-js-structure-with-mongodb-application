const express = require('express')
const upload = require('../utility/upload')
const router = express.Router();
const { checkConn, addUser, updateUser, getAllUser, deteleUser, validateUser } = require('../controllers/user_controller')

router.get('/conncheck', checkConn);
router.post('/addUser',upload.array("image"), addUser);
router.put('/updateUSer/:id', updateUser)
router.get('/allUSer', getAllUser)
router.delete('/deleteUser/:id', deteleUser)
router.post('/validateUser', validateUser);

module.exports = router