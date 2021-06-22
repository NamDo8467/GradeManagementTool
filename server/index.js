const express = require('express')
const app = express()
const cors = require('cors')
const {login} = require('./routes/login')
const { signup } = require('./routes/signup')
const { info } = require('./routes/info')
const { addStudent } = require('./routes/addStudent')
const {getStudent} = require('./routes/getStudent')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/login', login)
app.use('/signup', signup)
app.use('/user', info)
app.use('/addStudent', addStudent)
app.use('/getStudent', getStudent)

app.listen(5500, () => {
    console.log('Listening');
})