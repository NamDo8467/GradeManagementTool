const express = require('express')
const router = express.Router();
const {getStudent} = require('../models/Students')


router.get('/:teacher', getStudent)
module.exports.getStudent = router