const express = require('express');
const router = express.Router();
const { checkConnemp, addProduct, updateEmployee, getAllEmployee, deteleEmployee, validatEmployee,authVerify} = require('../controllers/product_controller')
const Auth = require('../middleware/auth')
router.get('/conncheckemp', checkConnemp);
router.post('/authVerify',Auth,authVerify);
router.post('/addnewProduct',addProduct);
module.exports = router