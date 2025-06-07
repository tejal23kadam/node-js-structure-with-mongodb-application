const express = require('express')
const router = express.Router();
const Auth = require('../middleware/auth')
const { checkConnOrder, addOrder, getAllOrder} = require('../controllers/order_controller');
router.get('/conncheckOrder', checkConnOrder);
router.post('/addOrder',Auth,addOrder);
router.get('/getAllOrders',getAllOrder);
module.exports = router 