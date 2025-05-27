const express = require('express');
const upload = require('../utility/upload')
const router = express.Router();
const { checkConnProduct, addProduct,authVerify, getAllProduct} = require('../controllers/product_controller')
const Auth = require('../middleware/auth')
router.get('/conncheckProduct', checkConnProduct);
router.post('/authVerify',Auth,authVerify);
router.post('/addnewProduct',upload.array("image"),addProduct);
router.get('/getAllProduct',getAllProduct);
module.exports = router 