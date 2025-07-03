const mongoose = require('mongoose')
const ImageSchema = new mongoose.Schema({
    path:{type:String,required:true},
    filename:{type:String,required:true}
},{timestamps:true})
module.exports = mongoose.model('Images', ImageSchema)
