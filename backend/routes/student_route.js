const express = require('express')
const router = express.Router();
const { checkConn, addStudent, updateStudent, getAllStudent, deteleStudent, validateStudent } = require('../controllers/student_controller')

router.get('/conncheck', checkConn);
router.post('/addnewStudent', addStudent);
router.put('/updateStudent/:id', updateStudent)
router.get('/allStudent', getAllStudent)
router.delete('/deleteStudent/:id', deteleStudent)
router.post('/validateStudent', validateStudent);

module.exports = router