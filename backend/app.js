const express = require('express')
const app = express()

const product = require('./routes/productRoute')

app.use(express.json())
app.use("/api/v1", product)

module.exports = app