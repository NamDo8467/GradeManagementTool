const express = require('express')
const router = express.Router()
const {getTeacher} = require('../models/Teachers')


router.post('/', getTeacher)

module.exports.login = router