const express = require('express')
const router = express.Router();
const Auth = require('../middleware/auth')
const { checkConnCart, addCart, updateCart, getUserCartDetail, removeProductFromCart,deleteAllProductFromCart,updateProductQuantity } = require('../controllers/cart_controller');
router.get('/conncheckCart', checkConnCart);
router.post('/addCart', Auth, addCart);
router.post('/removeProductFromCart', removeProductFromCart);
router.post('/updateCart', Auth, updateCart);
router.put('/updateProductQuantity', updateProductQuantity);
router.delete('/deleteAllProductFromCart/:userId',deleteAllProductFromCart)
router.get('/getUserCartDetail', getUserCartDetail);
module.exports = router 