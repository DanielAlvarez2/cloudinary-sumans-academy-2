const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const ImageModel = require('./models/image.model.js')
const app = express()
app.use(express.json())

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads')
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({storage})

app.post('/single',upload.single('image'),async(req,res)=>{
    try{
        console.log(req.file)
        const {path,filename} = req.file
        const image = await ImageModel({path,filename})
        await image.save()
        res.send({'msg':'Image Uploaded'})
    }catch(err){
        console.log(err)
        res.send({'error':'Unable to Upload Image'})
    }
})

app.listen(8187,async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database Connected')
    }catch(err){
        console.log(err)
    }
    console.log('App Running on Port 8187')
})