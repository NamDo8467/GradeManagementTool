const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
const uri = process.env.TEACHER_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


router.get("/", verify, (req, res) => {
  //req.teacher contains the teacher id
    client.connect(async (error) => {
        const collection = client.db('teachers').collection('information')
        try {
            const teacher = await collection.findOne({email: req.teacher.email})
        if (teacher) {
            res.send(teacher)
        } else {
            res.send("Not found")
        }
        } catch (error) {
            res.send("Error")
        }
        
    })
});

module.exports.info = router;
