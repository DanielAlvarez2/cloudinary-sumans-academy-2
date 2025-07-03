const express = require('express')
const multer = require('multer')
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

app.post('/single',upload.single('image'),(req,res)=>{
    console.log(req.file)
})

app.listen(8187,()=>{
    console.log('App Running on Port 8187')
})