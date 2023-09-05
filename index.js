const express = require('express')
const cors = require('cors')
const books = require('./Models/Mymodel')
require('dotenv').config()
const app = express()

app.use(cors())

app.get('/' , (req, res)=>{
    console.log("Hello World")
    res.send("Hello World")
})

app.get('/api', (req,res)=>{
    books.find({}).then((data)=>{
        res.json(data)
    })
})

app.listen(process.env.PORT || 8080)