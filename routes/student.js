const express = require('express');
const router = express.Router();
const {getStudents} = require('../controllers/getstudent');
const {getStudentById} = require('../controllers/getstudent');
const {createStudent} = require('../controllers/getstudent');
const {deleteStudent} = require('../controllers/getstudent');
const {updateStudent} = require('../controllers/getstudent');

router.get("/list",getStudents);
router.get("/get/:id",getStudentById);
router.post("/insert",createStudent);
router.put("/update/:id",updateStudent);
router.delete("/delete/:id",deleteStudent);
module.exports = router;