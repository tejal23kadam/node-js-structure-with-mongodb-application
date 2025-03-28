const express = require('express');
const router = express.Router();
const { checkConnemp, addEmployee, updateEmployee, getAllEmployee, deteleEmployee, validatEmployee,authVerify} = require('../controllers/employee_controller')
const Auth = require('../middleware/auth')
router.get('/conncheckemp', checkConnemp);
router.post('/authVerify',Auth,authVerify);
router.post('/addnewEmployee',Auth ,addEmployee);
module.exports = router