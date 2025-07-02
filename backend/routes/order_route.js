const express = require('express')
const router = express.Router();
const Auth = require('../middleware/auth')
const { checkConnOrder, addOrder, updateOrder, getUserOrderDetail,getUserLastOrder } = require('../controllers/order_controller');
router.get('/conncheckOrder', checkConnOrder);
router.post('/addOrder', Auth, addOrder);
router.post('/updateOrder', Auth, updateOrder);
router.get('/getUserLastOrder', getUserLastOrder)
router.get('/getUserOrderDetail', getUserOrderDetail);
module.exports = router 