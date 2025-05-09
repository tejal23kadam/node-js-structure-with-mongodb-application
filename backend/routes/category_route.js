const express = require('express')
const router = express.Router();
const Auth = require('../middleware/auth')
const { checkConnCategory, addCategory,getAllCategory} = require('../controllers/category_controller');
router.get('/conncheckCategory', checkConnCategory);
router.post('/addnewCategory',Auth,addCategory);
router.post('/getAllCategory',getAllCategory);
module.exports = router 