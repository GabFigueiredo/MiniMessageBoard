const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/home')
const mongoose = require('mongoose')
const uri = 'mongodb+srv://gabrielfandradee2:IOwGOaqN5VwGsX83@cluster0.nade7qe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/', router)

async function connect() {
    try {
        mongoose.connect(uri)
        console.log('Connected to mongodb database')
    }
    catch(error) {
        console.error('Could not connect to mongodb database')
    }
}

connect()
app.listen(5000, () => {console.log('Server running at localhost:5000')})