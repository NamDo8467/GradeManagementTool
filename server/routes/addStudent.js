const express = require('express')
const router = express.Router();
const {addStudent} = require('../models/Students')


router.post('/', addStudent)
module.exports.addStudent = router