const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/home')
const mongoose = require('mongoose')

// Some middlewares for data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// Use express router
app.use('/', router)

// Connect to database
async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/Mini-Message-Board")
        console.log('Connected to database')
    } catch (err) {
        console.log("Server could not connect to database", err)
    }
}
connect()

// Open the server at 5000
app.listen(5000, () => {console.log('Server running at localhost:5000')})

