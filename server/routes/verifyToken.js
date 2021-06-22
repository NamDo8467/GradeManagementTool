const jwt = require('jsonwebtoken')
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
const uri = process.env.TEACHER_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


function verify(req, res, next) {
    const token = req.header('auth-token')
    if (!token) return res.status(401).send("Access denied")
    
    try {
        
        const verified_id = jwt.verify(token, process.env.TOKEN_SECRET)
        
        req.teacher = verified_id
        
        next()
    } catch (error) {
        res.send(error)
    }
}

module.exports = verify