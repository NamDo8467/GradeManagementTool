const express = require('express')
const router = express.Router()
const {addTeacher} = require('../models/Teachers')


router.post('/', addTeacher)


module.exports.signup = router