const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/home')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/', router)

app.listen(5000, () => {console.log('Server running at localhost:5000')})