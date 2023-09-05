const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:false
})

const bookSchema = new mongoose.Schema({
    bookname:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    tel:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Books",bookSchema)